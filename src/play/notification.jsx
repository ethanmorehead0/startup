import React from "react";

import { GameEvent, GameNotifier } from "./gameNotifier";

export function Notification(props) {
  const userName = props.userName;

  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);
    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  }, []);

  function handleGameEvent(event) {
    setEvents((events) => {
      let newEvents = [event, ...events];
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
      } else if (event.type === GameEvent.System) {
        message = event.value.msg;
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
