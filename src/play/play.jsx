import React from "react";
import "./play.css";

import { Game } from "./game";
import { Notification } from "./notification";

export function Play() {
  function printBoard(board) {
    return board.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex}>
            {cell === 1 ? (
              <button className="light"></button>
            ) : (
              <button className="nolight"></button>
            )}
          </td>
        ))}
      </tr>
    ));
  }

  return (
    <main className="bg-secondary bg-light text-dark text-center align-items-center d-flex flex-column justify-content-center align-items-center">
      {/* <Game className="game" /> */}
      <Notification className="notification" />
      <div className="game-stats">
        <span className="game-info">
          <label className="label" htmlFor="health">
            ❤️
          </label>
          <input
            className="game-text"
            type="text"
            id="health"
            value="--"
            readOnly
          />
        </span>
        <span className="game-info">
          <label className="label" htmlFor="score">
            Score:
          </label>
          <input
            className="game-text"
            type="text"
            id="score"
            value="--"
            readOnly
          />
        </span>
      </div>
      <table className="game-table ">
        <tbody>
          {printBoard([
            [1, 0, 1, 1, 0],
            [0, 1, 0, 1, 1],
            [1, 1, 1, 0, 0],
            [0, 1, 0, 0, 1],
            [1, 0, 1, 1, 0],
          ])}
        </tbody>
      </table>

      <div>
        <button type="button" className="btn btn-outline-danger">
          Give up
        </button>
      </div>
    </main>
  );
}
