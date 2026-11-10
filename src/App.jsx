import { Board } from "./components/Board/Board";
import { Header } from "./components/Header/Header";
import { RestartButton } from "./components/RestartButton/RestartButton";
import { ScoreBoard } from "./components/ScoreBoard/ScoreBoard";
import { StatusBar } from "./components/StatusBar/StatusBar";
import { useGameState } from "./logic/useGameState";
import "./App.css";

/**
 * Root application component.
 * Composes the Header, ScoreBoard, StatusBar, Board, and Action buttons
 * inside a focused instrument panel on a Void canvas.
 */
export default function App() {
  const {
    board,
    currentPlayer,
    scores,
    winnerInfo,
    isDraw,
    isGameOver,
    handleCellClick,
    nextRound,
    resetGame,
  } = useGameState();

  return (
    <div className="app">
      <Header />

      <main className="app__game-panel" aria-label="Game area">
        <ScoreBoard scores={scores} />

        <StatusBar
          currentPlayer={currentPlayer}
          winnerInfo={winnerInfo}
          isDraw={isDraw}
        />

        <Board
          board={board}
          winningLine={winnerInfo?.line ?? null}
          isGameOver={isGameOver}
          onCellClick={handleCellClick}
        />

        <div className="action-buttons">
          {isGameOver && (
            <RestartButton
              variant="next-round"
              label="Play Next Round"
              ariaLabel="Start next round and keep scores"
              onClick={nextRound}
            />
          )}

          <RestartButton
            variant="restart"
            label="Restart"
            ariaLabel="Restart game and reset score and board"
            onClick={resetGame}
          />
        </div>
      </main>

      <footer className="app__footer">
        Built with React
      </footer>
    </div>
  );
}
