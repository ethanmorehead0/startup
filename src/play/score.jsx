import React from "react";

import { GameEvent, GameNotifier } from "./gameNotifier";

export function Score(props) {
  const userName = props.userName;

  return (
    <div className="game-stats">
      <span className="game-info">
        <label className="label" htmlFor="health">
          ❤️
        </label>
        <input
          className="game-text"
          type="text"
          id="health"
          value={props.health === 0 ? "--" : props.health}
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
          value={props.score === 0 ? "--" : props.score}
          readOnly
        />
      </span>
    </div>
  );
}
