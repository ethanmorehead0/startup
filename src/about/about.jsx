import React from "react";
import "./about.css";

export function About() {
  return (
    <main className="container-fluid bg-light text-dark ">
      <div>
        <div id="picture" className="picture-box">
          <img
            className="img1"
            src="OriginalLightsOut.jpg"
            alt="Original Lights Out game"
          />
        </div>

        <h2>History</h2>
        <p>
          Lights Out was created in 1995 as an electronic game released by Tiger
          Electronics. Using a 5x5 grid there would be an certain number of
          square that lite up and the goal was to turn them all off. The goal of
          the game is turn of all the lights on the board. When you click on a
          light, it toggles that light and the four adjacent lights. The game is
          won when all the lights are turned off.
        </p>

        <p>
          Earlier versions of the game include Merlin (played with a 3 by 3
          grid) and XL-25. Though XL-25 is the same thing as Lights Out and was
          made in 1983 it was never as popular as Lights Out.
        </p>
        <h2>How to play</h2>
        <p>
          There are many tricks that can be used to solve the game. There are
          formulas that chase the lights down before turning them off and others
          that use linear algebra to determine a solution. Either way the game
          is a fun and challenging game that can be played by anyone.
        </p>
      </div>
    </main>
  );
}
