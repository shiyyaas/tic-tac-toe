import "./RestartButton.css";

/**
 * Action button component for restarting the game (resetting score & board)
 * or proceeding to the next round.
 *
 * @param {{
 *   onClick: () => void,
 *   label?: string,
 *   ariaLabel?: string,
 *   variant?: "restart" | "next-round",
 * }} props
 */
export function RestartButton({
  onClick,
  label = "Restart",
  ariaLabel = "Restart game and reset score",
  variant = "restart",
}) {
  return (
    <button
      className={`btn btn--${variant}`}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
