import React from "react";
import "./play.css";
export function Play() {
  return (
    <main className="bg-secondary bg-light text-dark text-center align-items-center d-flex flex-column justify-content-center align-items-center">
      <div className="player">
        <p className="h2"> Mystery player</p>
        <ul className="alerts" role="alert">
          <div className="alert alert-primary game-start">
            Andy has started the game
          </div>
          <div className="alert alert-warning level-complete">
            John has completed level 2!
          </div>
          <div className="alert alert-success game-complete">
            John scored 73 points!!!
          </div>
        </ul>
      </div>

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
          <tr className="game-row">
            <td>
              <button className="nolight"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="nolight"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="nolight"></button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="nolight"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="nolight"></button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="nolight"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="nolight"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="nolight"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="nolight"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="nolight"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
            <td>
              <button className="light"></button>
            </td>
          </tr>
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
