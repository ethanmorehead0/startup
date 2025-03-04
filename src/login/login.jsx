import React from "react";

import { LogedOut } from "./logedOut";
import { LogedIn } from "./logedIn";
import { AuthState } from "./authState";

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="bg-light text-dark text-center align-items-center d-flex flex-column justify-content-center align-items-center">
      <h1 className="title">LIGHTS OUT</h1>
      <h1 className="title">EVOLUTION</h1>
      <p className="apiCall">3rd party service call Heckler placeholder</p>
      <div>
        {authState !== AuthState.Unknown && <h1>Welcome to Simon</h1>}

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
