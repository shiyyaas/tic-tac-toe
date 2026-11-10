/**
 * All winning line combinations for a 3×3 Tic-Tac-Toe board.
 * Each sub-array contains the three cell indices that form a winning line.
 */
export const WINNING_LINES = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // center column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal top-left → bottom-right
  [2, 4, 6], // diagonal top-right → bottom-left
];

/**
 * Determines the winner of the current board state.
 *
 * @param {Array<string|null>} squares – The 9-cell board array.
 * @returns {{ player: string, line: number[] } | null}
 *   An object with the winning player and their line indices, or null.
 */
export function calculateWinner(squares) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line };
    }
  }
  return null;
}

/**
 * Checks whether the board is completely filled (a draw if no winner).
 *
 * @param {Array<string|null>} squares – The 9-cell board array.
 * @returns {boolean}
 */
export function isBoardFull(squares) {
  return squares.every((cell) => cell !== null);
}
