import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

export default function App() {
  return (
    <div className="body bg-dark text-light">
      <header className="container-fluid">
        <nav className="navbar fixed-top navbar-dark px-3">
          <div className="navbar-brand">
            <a class="d-flex align-items-center text-decoration-none" href="#">
              <img class="logo" src="Lights_Out.ico" alt="Lights Out" />
              Lights Out Evolution
            </a>
          </div>
          <menu className="navbar-nav">
            <li className="nav-item px-1.5">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item px-1.5">
              <a className="nav-link" href="play.html">
                Play
              </a>
            </li>
            <li className="nav-item px-1.5">
              <a className="nav-link" href="scores.html">
                Scores
              </a>
            </li>
            <li className="nav-item px-1.5">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer className="bg-dark text-white-50">
        <div className="container-fluid">
          <span className="text-reset">Ethan Morehead</span>
          <a
            className="text-reset"
            href="https://github.com/ethanmorehead0/startup"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
