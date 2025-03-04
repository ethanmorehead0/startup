import React from "react";

import Button from "react-bootstrap/Button";
import { MessageText } from "./messageText";

export function LogedOut(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState("");
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem("userName", userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem("userName", userName);
    props.onLogin(userName);
  }

  return (
    <form method="get" action="play.html">
      <div className="input-group mb-3">
        <span className="bar-text input-group-text">@ </span>
        <input
          className="bar-text form-control"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="your@email.com"
        />
      </div>
      <div className="input-group mb-3">
        <span className="bar-text input-group-text">🔒 </span>
        <input
          className="bar-text form-control"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </div>
      <Button
        variant="primary"
        onClick={() => loginUser()}
        disabled={!userName || !password}
        className="buttons btn btn-primary button1"
        type="submit"
      >
        Login
      </Button>
      <Button
        variant="secondary"
        onClick={() => createUser()}
        disabled={!userName || !password}
        className="buttons btn btn-secondary button2"
        type="submit"
      >
        Register
      </Button>
      <MessageText
        message={displayError}
        onHide={() => setDisplayError(null)}
      />
    </form>
  );
}
