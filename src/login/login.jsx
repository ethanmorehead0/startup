import React from "react";

export function Login() {
  return (
    <main className="bg-light text-dark text-center align-items-center d-flex flex-column justify-content-center align-items-center">
      <h1 className="title">LIGHTS OUT</h1>
      <h1 className="title">EVOLUTION</h1>
      <p className="apiCall">3rd party service call Heckler placeholder</p>

      <form method="get" action="play.html">
        <div className="input-group mb-3">
          <span className="bar-text input-group-text">@ </span>
          <input
            className="bar-text form-control"
            type="text"
            placeholder="your@email.com"
          />
        </div>
        <div className="input-group mb-3">
          <span className="bar-text input-group-text">🔒 </span>
          <input
            className="bar-text form-control"
            type="password"
            placeholder="password"
          />
        </div>
        <button className="buttons btn btn-primary button1" type="submit">
          Login
        </button>
        <button className="buttons btn btn-secondary button2" type="submit">
          Register
        </button>
      </form>
    </main>
  );
}
