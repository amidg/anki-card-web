import React from "react"
import { Card, parseDeck } from "./deck"

interface Props {
  onDeck: (cards: Card[]) => void
  onError: (message: string) => void
  error?: string | null
}

export function UploadScreen({ onDeck, onError, error }: Props) {
  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const text = await file.text()
    try {
      const cards = parseDeck(text)
      onDeck(cards)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unknown error"
      onError(message)
    }
  }

  return (
    <div className="screen">
      <h1 className="muted" style={{ marginBottom: 32, fontSize: 24 }}>
        Anki Card Study
      </h1>
      <label className="file-label">
        <input type="file" accept=".yaml,.yml" className="file-input" onChange={handleFile} />
        <span className="btn btn-primary">Upload deck (.yaml)</span>
      </label>
      {error && <p className="error-msg mono muted" role="alert">{error}</p>}
    </div>
  )
}
