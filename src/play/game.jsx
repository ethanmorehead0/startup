import React from "react";

import { GameEvent, GameNotifier } from "./gameNotifier";
import { Score } from "./score";

export function Game(props) {
  const userName = props.userName;

  const [grid, setGrid] = React.useState([]);
  const [level, setLevel] = React.useState(1);
  const [score, setScore] = React.useState(0);
  const [health, setHealth] = React.useState(100);
  const [gameState, setGameState] = React.useState("playing");

  async function createGrid(level = 1) {
    const localGrid = [];
    for (let i = 0; i < level + 4; i++) {
      const row = [];
      for (let j = 0; j < level + 4; j++) {
        row.push(0);
      }
      localGrid.push(row);
    }
    while (
      localGrid.flat().filter((cell) => cell === 1).length <
      (level + 4) ** 2 * 0.3
    ) {
      for (let i = 0; i < (level + 4) ** 2 * 2; i++) {
        toggle(
          localGrid,
          Math.floor(Math.random() * localGrid.length),
          Math.floor(Math.random() * localGrid[0].length)
        );
      }
    }
    setGrid(localGrid);
  }
  function toggle(grid, rowIndex, cellIndex) {
    const newGrid = [...grid];
    if (rowIndex > 0) {
      newGrid[rowIndex - 1][cellIndex] =
        newGrid[rowIndex - 1][cellIndex] === 1 ? 0 : 1;
    }
    if (rowIndex < newGrid.length - 1) {
      newGrid[rowIndex + 1][cellIndex] =
        newGrid[rowIndex + 1][cellIndex] === 1 ? 0 : 1;
    }
    if (cellIndex > 0) {
      newGrid[rowIndex][cellIndex - 1] =
        newGrid[rowIndex][cellIndex - 1] === 1 ? 0 : 1;
    }
    if (cellIndex < newGrid[rowIndex].length - 1) {
      newGrid[rowIndex][cellIndex + 1] =
        newGrid[rowIndex][cellIndex + 1] === 1 ? 0 : 1;
    }
    newGrid[rowIndex][cellIndex] = newGrid[rowIndex][cellIndex] === 1 ? 0 : 1;
    setGrid(newGrid);
  }
  React.useEffect(() => {
    if (health <= 0) {
      gameEnd();
    }
  }, [health]);

  React.useEffect(() => {
    if (grid.length === 0) {
      reset();
    } else if (grid.every((row) => row.every((cell) => cell === 0))) {
      levelUp();
    }
  }, [grid]);

  async function gameEnd() {
    let toAdd = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] === 0) {
          toAdd++;
        }
      }
    }

    const newScore = score + toAdd + health;
    setScore(newScore);
    await saveScore(newScore, level);
    setGameState("gameover");
  }

  async function reset() {
    setLevel(1);
    setScore(0);
    setHealth(100);

    createGrid();

    // Let other players know a new game has started
    setGameState("playing");
    GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
  }

  async function levelUp() {
    createGrid(level + 1);
    setScore(score + (level + 4) ** 3 + Math.floor(health / 10));
    setHealth(health + (level + 5) * 3);
    setLevel(level + 1);

    GameNotifier.broadcastEvent(userName, GameEvent.levelComplete, level + 1);
  }

  function handleCellClick(rowIndex, cellIndex) {
    const newGrid = [...grid];
    if (rowIndex > 0) {
      newGrid[rowIndex - 1][cellIndex] =
        newGrid[rowIndex - 1][cellIndex] === 1 ? 0 : 1;
    }
    if (rowIndex < newGrid.length - 1) {
      newGrid[rowIndex + 1][cellIndex] =
        newGrid[rowIndex + 1][cellIndex] === 1 ? 0 : 1;
    }
    if (cellIndex > 0) {
      newGrid[rowIndex][cellIndex - 1] =
        newGrid[rowIndex][cellIndex - 1] === 1 ? 0 : 1;
    }
    if (cellIndex < newGrid[rowIndex].length - 1) {
      newGrid[rowIndex][cellIndex + 1] =
        newGrid[rowIndex][cellIndex + 1] === 1 ? 0 : 1;
    }
    newGrid[rowIndex][cellIndex] = newGrid[rowIndex][cellIndex] === 1 ? 0 : 1;
    setGrid(newGrid);
    setHealth(health - 1);
  }

  function printBoard(board) {
    return board.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex}>
            {cell === 1 ? (
              <button
                className="light"
                onClick={() => handleCellClick(rowIndex, cellIndex)}
              ></button>
            ) : (
              <button
                className="nolight"
                onClick={() => handleCellClick(rowIndex, cellIndex)}
              ></button>
            )}
          </td>
        ))}
      </tr>
    ));
  }

  async function saveScore(score, level) {
    const date = new Date().toLocaleDateString();
    const newScore = {
      name: userName,
      score: score,
      level: level,
      date: date,
    };

    updateScoresLocal(newScore);
    updateScores(newScore);
    const newS = { name: userName, score: score, level: level, date: date };

    await fetch("/api/score", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newS),
    });

    // Let other players know the game has concluded
    GameNotifier.broadcastEvent(userName, GameEvent.End, newS);
  }

  async function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem("localHighscores");
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore.score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem("localHighscores", JSON.stringify(scores));
  }

  // To be implemented elsewhere
  async function updateScores(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem("highscores");
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore.score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem("highscores", JSON.stringify(scores));
  }

  return (
    <>
      {gameState === "playing" ? (
        <div>
          <Score className="score" score={score} health={health} />
          <table className="game-table ">
            <tbody>{printBoard(grid)}</tbody>
          </table>
          <div>
            <button
              onClick={() => gameEnd()}
              type="button"
              className="btn btn-outline-danger"
            >
              Give up
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Game Over</h1>
          <p>Score: {score}</p>
          <p>Level: {level}</p>
          <button
            onClick={() => reset()}
            type="button"
            className="btn btn-outline-primary"
          >
            Restart
          </button>
        </div>
      )}
    </>
  );
}
