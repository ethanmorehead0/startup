import React from "react";

import { GameEvent, GameNotifier } from "./notifier";

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
      let newEvents = [event, ...prevEvents];
      if (newEvents.length > 10) {
        newEvents = newEvents.slice(0, 10);
      }
      return newEvents;
    });
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = "unknown";
      if (event.type === GameEvent.End) {
        message = `scored ${event.value.score}`;
      } else if (event.type === GameEvent.Start) {
        message = `started a new game`;
      } else if (event.type === GameEvent.System) {
        message = event.value.msg;
      }

      messageArray.push(
        <div key={i} className="event">
          <span className={"player-event"}>{event.from.split("@")[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className="player">
      <p className="h2"> {Player}</p>
      <ul className="alerts" role="alert">
        <div id="player-messages">{createMessageArray()}</div>
      </ul>
    </div>
  );
}
