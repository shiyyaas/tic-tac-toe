import { forwardRef } from "react";
import "./Cell.css";

/**
 * A single cell on the Tic-Tac-Toe board.
 *
 * Implements accessible button semantics with clear row/col ARIA labels,
 * keyboard accessibility, and state-driven classes.
 */
export const Cell = forwardRef(function Cell(
  { index, value, isWinning, isGameOver, hasWinner, onClick, onKeyDown },
  ref,
) {
  const isFilled = value !== null;
  const isDimmed = hasWinner && !isWinning;

  const classNames = [
    "cell",
    isFilled && "cell--filled",
    isGameOver && "cell--disabled",
    isDimmed && "cell--dimmed",
    value === "X" && "cell--x",
    value === "O" && "cell--o",
    isWinning && "cell--winning",
  ]
    .filter(Boolean)
    .join(" ");

  const row = Math.floor(index / 3) + 1;
  const col = (index % 3) + 1;
  const label = value
    ? `Row ${row}, Column ${col}: ${value}`
    : `Row ${row}, Column ${col}: empty`;

  const handleClick = () => {
    if (!isFilled && !isGameOver) {
      onClick(index);
    }
  };

  return (
    <button
      ref={ref}
      className={classNames}
      type="button"
      role="gridcell"
      aria-label={label}
      aria-disabled={isFilled || isGameOver}
      onClick={handleClick}
      onKeyDown={(event) => onKeyDown?.(event, index)}
    >
      {value}
    </button>
  );
});
