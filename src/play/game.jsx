import React from "react";

import { GameEvent, GameNotifier } from "./gameNotifier";

export function Game(props) {
  const userName = props.userName;

  const [score, setScore] = React.useState(0);
  const [health, setHealth] = React.useState(100);
  const [gameState, setGameState] = React.useState("waiting");

  React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);
    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  }, []);

  function handleGameEvent(event) {
    if (event.type === GameEvent.End) {
      setScore(event.value.score);
      setGameState("gameOver");
    } else if (event.type === GameEvent.Start) {
      setGameState("playing");
    }
  }

  return (
    <div className="player">
      <ul className="alerts" role="alert"></ul>
    </div>
  );
}
