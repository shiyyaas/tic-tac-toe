import { useRef } from "react";
import { Cell } from "../Cell/Cell";
import "./Board.css";

/**
 * The 3×3 game board rendered as a CSS Grid of Cell components.
 * Supports directional arrow navigation across cells.
 *
 * @param {{
 *   board: Array<string|null>,
 *   winningLine: number[] | null,
 *   isGameOver: boolean,
 *   onCellClick: (index: number) => void,
 * }} props
 */
export function Board({ board, winningLine, isGameOver, onCellClick }) {
  const cellRefs = useRef([]);

  const handleKeyDown = (event, currentIndex) => {
    let nextIndex = null;
    const row = Math.floor(currentIndex / 3);
    const col = currentIndex % 3;

    switch (event.key) {
      case "ArrowRight":
        if (col < 2) nextIndex = currentIndex + 1;
        break;
      case "ArrowLeft":
        if (col > 0) nextIndex = currentIndex - 1;
        break;
      case "ArrowDown":
        if (row < 2) nextIndex = currentIndex + 3;
        break;
      case "ArrowUp":
        if (row > 0) nextIndex = currentIndex - 3;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = 8;
        break;
      default:
        return;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      cellRefs.current[nextIndex]?.focus();
    }
  };

  const hasWinner = winningLine !== null;

  return (
    <div className="board" role="grid" aria-label="Tic-Tac-Toe board">
      {board.map((value, index) => (
        <Cell
          key={index}
          ref={(element) => {
            cellRefs.current[index] = element;
          }}
          index={index}
          value={value}
          isWinning={hasWinner && winningLine.includes(index)}
          isGameOver={isGameOver}
          hasWinner={hasWinner}
          onClick={onCellClick}
          onKeyDown={handleKeyDown}
        />
      ))}
    </div>
  );
}
