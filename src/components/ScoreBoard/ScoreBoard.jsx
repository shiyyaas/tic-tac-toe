import "./ScoreBoard.css";

/**
 * ScoreBoard component displaying the total wins by Player X vs Player O and ties.
 * Styled as an Opal Electronics instrument readout.
 *
 * @param {{
 *   scores: { x: number, o: number, ties: number },
 * }} props
 */
export function ScoreBoard({ scores }) {
  return (
    <section className="score-board" aria-label="Score board">
      <div className="score-board__item score-board__item--x">
        <span className="score-board__label">Player X</span>
        <span
          className="score-board__value"
          aria-label={`Player X score: ${scores.x}`}
        >
          {scores.x}
        </span>
      </div>

      <div className="score-board__item score-board__item--ties">
        <span className="score-board__label">Ties</span>
        <span
          className="score-board__value"
          aria-label={`Ties count: ${scores.ties}`}
        >
          {scores.ties}
        </span>
      </div>

      <div className="score-board__item score-board__item--o">
        <span className="score-board__label">Player O</span>
        <span
          className="score-board__value"
          aria-label={`Player O score: ${scores.o}`}
        >
          {scores.o}
        </span>
      </div>
    </section>
  );
}
