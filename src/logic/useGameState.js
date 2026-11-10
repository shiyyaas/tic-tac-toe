import { useCallback, useMemo, useState } from "react";

import { calculateWinner, isBoardFull } from "./gameLogic";

const INITIAL_SCORES = { x: 0, o: 0, ties: 0 };

/**
 * Custom hook encapsulating all Tic-Tac-Toe game state, scores, and actions.
 *
 * @returns {{
 *   board: Array<string|null>,
 *   currentPlayer: "X" | "O",
 *   scores: { x: number, o: number, ties: number },
 *   winnerInfo: { player: string, line: number[] } | null,
 *   isDraw: boolean,
 *   isGameOver: boolean,
 *   handleCellClick: (index: number) => void,
 *   nextRound: () => void,
 *   resetGame: () => void,
 * }}
 */
export function useGameState() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scores, setScores] = useState(INITIAL_SCORES);

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

      const nextBoard = [...board];
      nextBoard[index] = currentPlayer;
      setBoard(nextBoard);

      const winner = calculateWinner(nextBoard);
      if (winner) {
        const key = winner.player.toLowerCase();
        setScores((prev) => ({
          ...prev,
          [key]: prev[key] + 1,
        }));
      } else if (isBoardFull(nextBoard)) {
        setScores((prev) => ({
          ...prev,
          ties: prev.ties + 1,
        }));
      }

      setIsXNext((prev) => !prev);
    },
    [board, currentPlayer, isGameOver],
  );

  /**
   * Resets only the board to start the next round while preserving scores.
   */
  const nextRound = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }, []);

  /**
   * Full reset: clears board, winner, starting player, and resets all scores back to zero.
   */
  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setScores(INITIAL_SCORES);
  }, []);

  return {
    board,
    currentPlayer,
    scores,
    winnerInfo,
    isDraw,
    isGameOver,
    handleCellClick,
    nextRound,
    resetGame,
  };
}
