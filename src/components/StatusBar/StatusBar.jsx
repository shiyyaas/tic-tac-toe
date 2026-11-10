import "./StatusBar.css";

/**
 * Displays the current game status: whose turn it is, who won, or if it's a draw.
 *
 * @param {{
 *   currentPlayer: "X" | "O",
 *   winnerInfo: { player: string, line: number[] } | null,
 *   isDraw: boolean,
 * }} props
 */
export function StatusBar({ currentPlayer, winnerInfo, isDraw }) {
  if (winnerInfo) {
    return (
      <div className="status-bar status-bar--winner" role="status" aria-live="polite">
        <span>Player</span>
        <span
          className={`status-bar__player status-bar__player--${winnerInfo.player.toLowerCase()}`}
        >
          {winnerInfo.player}
        </span>
        <span>wins!</span>
      </div>
    );
  }

  if (isDraw) {
    return (
      <div className="status-bar status-bar--draw" role="status" aria-live="polite">
        <span>It&apos;s a draw</span>
      </div>
    );
  }

  return (
    <div className="status-bar" role="status" aria-live="polite">
      <span>Player</span>
      <span
        className={`status-bar__player status-bar__player--${currentPlayer.toLowerCase()}`}
      >
        {currentPlayer}
      </span>
      <span>&apos;s turn</span>
    </div>
  );
}
