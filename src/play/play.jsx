import React from "react";
import "./play.css";

import { Notification } from "./notification";
import { Score } from "./score";
import { Game } from "./game";

export function Play(props) {
  return (
    <main className="bg-secondary bg-light text-dark text-center align-items-center d-flex flex-column justify-content-center align-items-center">
      {/* <Game className="game" /> */}
      <Notification className="notification" userName={props.userName} />
      <Game className="game" userName={props.userName} />
    </main>
  );
}
