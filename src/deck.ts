import { parse } from "yaml"

export interface Card {
  id: string
  category: string
  question: string
  answer: string
}

export function parseDeck(text: string): Card[] {
  let parsed: unknown
  try {
    parsed = parse(text)
  } catch (err) {
    const message = err instanceof Error ? err.message : "Invalid YAML"
    throw new Error(`Failed to parse YAML: ${message}`)
  }

  if (typeof parsed !== "object" || parsed === null || !("cards" in parsed)) {
    throw new Error("File must contain a 'cards' mapping at the top level")
  }

  const obj = parsed as Record<string, unknown>
  const cardsObj = obj.cards
  if (typeof cardsObj !== "object" || cardsObj === null || Array.isArray(cardsObj)) {
    throw new Error("Field 'cards' must be a mapping of cards")
  }

  const entries = Object.entries(cardsObj)
  if (entries.length === 0) {
    throw new Error("Deck contains no cards")
  }

  const result: Card[] = []
  for (const [key, value] of entries) {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      throw new Error(`Card "${key}" must be an object`)
    }
    const card = value as Record<string, unknown>
    for (const field of ["category", "question", "answer"]) {
      if (typeof card[field] !== "string" || (card[field] as string).trim() === "") {
        throw new Error(`Card "${key}" is missing field: ${field}`)
      }
    }
    result.push({
      id: key,
      category: (card.category as string).trim(),
      question: (card.question as string).trim(),
      answer: (card.answer as string).trim(),
    })
  }
  return result
}

export function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export function moveToEnd<T>(arr: T[]): T[] {
  if (arr.length === 0) return arr
  return [...arr.slice(1), arr[0]]
}

export function mostFailed(
  failureSeqs: Record<string, number[]>,
  deck: Card[],
): { card: Card; count: number } | null {
  const ids = Object.keys(failureSeqs)
  if (ids.length === 0) return null

  let maxCount = 0
  for (const seqs of Object.values(failureSeqs)) {
    if (seqs.length > maxCount) maxCount = seqs.length
  }
  if (maxCount === 0) return null

  const tied = ids.filter((id) => failureSeqs[id].length === maxCount)
  if (tied.length === 1) {
    const card = deck.find((c) => c.id === tied[0])
    return card ? { card, count: maxCount } : null
  }

  // Tie: the card that accumulated the count first = earliest seq at index (maxCount - 1)
  let bestSeq = Infinity
  let bestId = tied[0]
  for (const id of tied) {
    const seq = failureSeqs[id][maxCount - 1]
    if (seq < bestSeq) {
      bestSeq = seq
      bestId = id
    }
  }
  const card = deck.find((c) => c.id === bestId)
  return card ? { card, count: maxCount } : null
}
