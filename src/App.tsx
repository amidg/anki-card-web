import { useReducer, useCallback } from "react"
import { Card, shuffle } from "./deck"
import { UploadScreen } from "./UploadScreen"
import { StudyCard } from "./StudyCard"
import { CompleteScreen } from "./CompleteScreen"

type Phase = "upload" | "study" | "complete"

interface State {
  deck: Card[]
  queue: Card[]
  revealed: boolean
  failureSeqs: Record<string, number[]>
  seqCounter: number
  error: string | null
  phase: Phase
}

type Action =
  | { type: "LOAD"; cards: Card[] }
  | { type: "LOAD_ERROR"; message: string }
  | { type: "REVEAL" }
  | { type: "JUDGE"; ok: true }
  | { type: "JUDGE"; ok: false }
  | { type: "RESET" }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOAD": {
      const deck = action.cards
      return {
        ...state,
        deck,
        queue: shuffle(deck),
        revealed: false,
        failureSeqs: {},
        seqCounter: 0,
        error: null,
        phase: "study",
      }
    }
    case "LOAD_ERROR":
      return { ...state, error: action.message }
    case "REVEAL":
      return { ...state, revealed: true }
    case "JUDGE": {
      if (action.ok) {
        const queue = state.queue.slice(1)
        const phase = queue.length === 0 ? "complete" : "study"
        return { ...state, queue, revealed: false, phase }
      }
      return {
        ...state,
        queue: [...state.queue.slice(1), state.queue[0]],
        failureSeqs: {
          ...state.failureSeqs,
          [state.queue[0].id]: [
            ...(state.failureSeqs[state.queue[0].id] || []),
            state.seqCounter,
          ],
        },
        seqCounter: state.seqCounter + 1,
        revealed: false,
      }
    }
    case "RESET": {
      return {
        ...state,
        queue: shuffle(state.deck),
        revealed: false,
        failureSeqs: {},
        seqCounter: 0,
        phase: "study",
      }
    }
    default:
      return state
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, {
    deck: [] as Card[],
    queue: [] as Card[],
    revealed: false,
    failureSeqs: {} as Record<string, number[]>,
    seqCounter: 0,
    error: null as string | null,
    phase: "upload" as Phase,
  })

  const onDeckLoaded = useCallback((cards: Card[]) => dispatch({ type: "LOAD", cards }), [])
  const onDeckError = useCallback((message: string) => dispatch({ type: "LOAD_ERROR", message }), [])
  const onReveal = useCallback(() => dispatch({ type: "REVEAL" }), [])
  const onJudge = useCallback(
    (ok: boolean) => dispatch({ type: "JUDGE", ok }),
    [],
  )
  const onReset = useCallback(() => dispatch({ type: "RESET" }), [])

  if (state.phase === "upload") {
    return <UploadScreen onDeck={onDeckLoaded} onError={onDeckError} error={state.error} />
  }

  if (state.error) {
    return <UploadScreen onDeck={onDeckLoaded} onError={onDeckError} error={state.error} />
  }

  if (state.phase === "study") {
    const current = state.queue[0]
    const remaining = state.queue.length
    const total = state.deck.length
    return (
      <StudyCard
        card={current}
        remaining={remaining}
        total={total}
        revealed={state.revealed}
        onReveal={onReveal}
        onJudge={onJudge}
        onReset={onReset}
      />
    )
  }

  return <CompleteScreen deck={state.deck} failureSeqs={state.failureSeqs} onReset={onReset} />
}
