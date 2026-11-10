import { Board } from "./components/Board/Board";
import { Header } from "./components/Header/Header";
import { RestartButton } from "./components/RestartButton/RestartButton";
import { StatusBar } from "./components/StatusBar/StatusBar";
import { useGameState } from "./logic/useGameState";
import "./App.css";

/**
 * Root application component.
 * Composes the Header, StatusBar, Board, and RestartButton into
 * a single instrument-panel card on a Void canvas.
 */
export default function App() {
  const {
    board,
    currentPlayer,
    winnerInfo,
    isDraw,
    isGameOver,
    handleCellClick,
    resetGame,
  } = useGameState();

  return (
    <div className="app">
      <Header />

      <main className="app__game-panel" aria-label="Game area">
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

        <RestartButton onClick={resetGame} />
      </main>

      <footer className="app__footer">
        Built with React
      </footer>
    </div>
  );
}
