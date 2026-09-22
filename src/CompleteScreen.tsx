import { Card, mostFailed } from "./deck"

interface Props {
  deck: Card[]
  failureSeqs: Record<string, number[]>
  onReset: () => void
}

export function CompleteScreen({ deck, failureSeqs, onReset }: Props) {
  const successes = deck.length
  const totalFailures = Object.values(failureSeqs).reduce((sum, seq) => sum + seq.length, 0)
  const mostFailedCard = mostFailed(failureSeqs, deck)

  return (
    <div className="screen">
      <h2>Session complete</h2>
      <div className="card" style={{ marginTop: 32 }}>
        <div className="stat-row">
          <div className="stat-line">
            <span>Successes</span>
            <span className="mono">{successes}</span>
          </div>
          <div className="stat-line">
            <span>Failures</span>
            <span className="mono">{totalFailures}</span>
          </div>
          {mostFailedCard && (
            <div className="stat-line">
              <span>Most failed</span>
              <span className="mono">
                {mostFailedCard.card.question} × {mostFailedCard.count}
              </span>
            </div>
          )}
        </div>
      </div>
      <button className="btn btn-primary" style={{ marginTop: 32 }} onClick={onReset}>
        Reset
      </button>
    </div>
  )
}
