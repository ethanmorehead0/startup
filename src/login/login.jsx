import React from "react";

import { LogedOut } from "./logedOut";
import { LogedIn } from "./logedIn";
import { AuthState } from "./authState";

export function Login({ userName, authState, onAuthChange }) {
  const [setup, setSetup] = React.useState();
  const [punchline, setPunchline] = React.useState();
  React.useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setSetup(data.setup);
        setPunchline(data.punchline);
      });
  }, []);

  return (
    <main className="bg-light text-dark text-center align-items-center d-flex flex-column justify-content-center align-items-center">
      {authState !== AuthState.Unknown && (
        <div>
          <h1 className="title">LIGHTS OUT</h1>
          <h1 className="title">EVOLUTION</h1>
          <p className="apiCall">{setup}</p>
          <p className="apiCall">{punchline}</p>
        </div>
      )}
      <div>
        {authState === AuthState.LogedIn && (
          <LogedIn
            userName={userName}
            onLogout={() => onAuthChange(userName, AuthState.LogedOut)}
          />
        )}
        {authState === AuthState.LogedOut && (
          <LogedOut
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.LogedIn);
            }}
          />
        )}
      </div>
    </main>
  );
}
