import React from "react";

import { GameEvent, GameNotifier } from "./gameNotifier";

export function Notification(props) {
  const userName = props.userName;

  const [grid, setGrid] = React.useState([]);
  const [level, setLevel] = React.useState(1);
  const [score, setScore] = React.useState(0);
  const [health, setHealth] = React.useState(100);
  const [events, setEvents] = React.useState(0);

  async function createGrid() {
    const grid = [];
    for (let i = 0; i < level + 4; i++) {
      const row = [];
      for (let j = 0; j < level + 4; j++) {
        row.push(Math.floor(Math.random() * 2));
      }
      grid.push(row);
    }
    setGrid(grid);
  }

  async function reset() {
    setAllowPlayer(false);
    setLevel(1);
    setScore(0);
    setHealth(100);
    createGrid();

    // Let other players know a new game has started
    GameNotifier.broadcastEvent(userName, GameEvent.Start, {});
  }

  React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);
    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  }, []);

  function handleGameEvent(event) {
    setEvents((events) => {
      let newEvents = [event, ...events];
      if (newEvents.length > 3) {
        newEvents = newEvents.slice(0, 3);
      }
      return newEvents;
    });
  }

  function createMessageArray() {
    const messageArray = [];
    let alertClass = "alert-primary";
    for (const [i, event] of events.entries()) {
      let message = "unknown";
      if (event.type === GameEvent.End) {
        message = ` scored ${event.value.score}`;
        alertClass = "alert-primary game-start";
      } else if (event.type === GameEvent.Start) {
        message = ` started a new game`;
        alertClass = "alert-warning level-complete";
      } else if (event.type === GameEvent.levelComplete) {
        message = ` completed level ${event.value.level}`;
        alertClass = "alert-success game-complete";
      }

      messageArray.push(
        <div key={i} className={`event alert ${alertClass}`}>
          <span className={"player-event"}>{event.from.split("@")[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className="player">
      <p className="h2"> User: {userName}</p>
      <ul className="alerts" role="alert">
        <div id="player-messages">{createMessageArray()}</div>
      </ul>
    </div>
  );
}
