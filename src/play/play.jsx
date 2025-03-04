import React from "react";
import "./play.css";

import { Game } from "./game";
import { Notification } from "./notification";

export function Play() {
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
