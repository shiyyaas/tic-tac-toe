import { useCallback, useMemo, useState } from "react";

import { calculateWinner, isBoardFull } from "./gameLogic";

/**
 * Custom hook encapsulating all Tic-Tac-Toe game state and actions.
 *
 * @returns {{
 *   board: Array<string|null>,
 *   currentPlayer: "X" | "O",
 *   winnerInfo: { player: string, line: number[] } | null,
 *   isDraw: boolean,
 *   isGameOver: boolean,
 *   handleCellClick: (index: number) => void,
 *   resetGame: () => void,
 * }}
 */
export function useGameState() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winnerInfo = useMemo(() => calculateWinner(board), [board]);

  const isDraw = useMemo(
    () => !winnerInfo && isBoardFull(board),
    [winnerInfo, board],
  );

  const isGameOver = winnerInfo !== null || isDraw;

  const currentPlayer = isXNext ? "X" : "O";

  const handleCellClick = useCallback(
    (index) => {
      if (board[index] !== null || isGameOver) {
        return;
      }

      setBoard((prev) => {
        const next = [...prev];
        next[index] = currentPlayer;
        return next;
      });
      setIsXNext((prev) => !prev);
    },
    [board, currentPlayer, isGameOver],
  );

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }, []);

  return {
    board,
    currentPlayer,
    winnerInfo,
    isDraw,
    isGameOver,
    handleCellClick,
    resetGame,
  };
}
