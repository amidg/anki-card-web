import { Card } from "./deck"

interface Props {
  card: Card
  remaining: number
  total: number
  revealed: boolean
  onReveal: () => void
  onJudge: (ok: boolean) => void
  onReset: () => void
}

export function StudyCard({ card, remaining, total, revealed, onReveal, onJudge, onReset }: Props) {
  return (
    <div className="screen">
      <div className="card">
        <div className="top-row">
          <span className="mono muted">{card.category}</span>
          <span className="mono muted">
            {remaining} / {total} left
          </span>
        </div>
        <div className="card-content">
          <p style={{ marginBottom: 24, fontWeight: 400 }}>{card.question}</p>
          <div className={revealed ? "answer revealed" : "answer"}>
            <p>{card.answer}</p>
          </div>
        </div>
        {!revealed ? (
          <button className="btn btn-primary" style={{ marginTop: 24, width: "100%" }} onClick={onReveal}>
            Show answer
          </button>
        ) : (
          <div className="buttons-row">
            <button
              className="btn btn-success btn-icon"
              aria-label="Mark as successful"
              title="Mark as successful"
              onClick={() => onJudge(true)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10L8 14L16 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="btn btn-danger btn-icon"
              aria-label="Mark as failed"
              title="Mark as failed"
              onClick={() => onJudge(false)}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L14 14M14 6L6 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="btn btn-reset"
              onClick={onReset}
              style={{ marginLeft: 8 }}
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
