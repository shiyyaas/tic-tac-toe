import "./RestartButton.css";

/**
 * A button that resets the game to its initial state.
 *
 * @param {{ onClick: () => void }} props
 */
export function RestartButton({ onClick }) {
  return (
    <button
      className="restart-button"
      type="button"
      aria-label="Restart game"
      onClick={onClick}
    >
      Restart
    </button>
  );
}
