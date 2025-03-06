import React from "react";
import "./scores.css";

export function Scores() {
  const [highscores, setHighscores] = React.useState([]);
  const [localHighscores, setLocalHighscores] = React.useState([]);

  React.useEffect(() => {
    const scoresText = localStorage.getItem("highscores");
    const localScoresText = localStorage.getItem("localHighscores");
    if (scoresText) {
      setHighscores(JSON.parse(scoresText));
    }
    if (localScoresText) {
      setLocalHighscores(JSON.parse(localScoresText));
    }
  }, []);

  const scoreRows = [];
  if (highscores.length) {
    for (const [i, highscore] of highscores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{highscore.name.split("@")[0]}</td>
          <td>{highscore.score}</td>
          <td>{highscore.level}</td>
          <td>{highscore.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key="0">
        <td colSpan="5">Top 10 has your name on it.</td>
      </tr>
    );
  }

  const localRows = [];
  if (localHighscores.length) {
    for (const [i, localscore] of localHighscores.entries()) {
      localRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{localscore.name.split("@")[0]}</td>
          <td>{localscore.score}</td>
          <td>{localscore.level}</td>
          <td>{localscore.date}</td>
        </tr>
      );
    }
  } else {
    localRows.push(
      <tr key="1">
        <td colSpan="5">
          If at first you don't succed... you'll at least still get first.
        </td>
      </tr>
    );
  }

  return (
    <main className="bg-light text-dark text-center align-items-center d-flex flex-column justify-content-center align-items-center">
      <h2 className="title">Top 10</h2>
      <table className="table table-dark table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Level</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="scores">{scoreRows}</tbody>
      </table>
      <h2 className="title">Local highscore</h2>
      <table className="table table-dark table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Level</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody id="localScores">{localRows}</tbody>
      </table>
    </main>
  );
}
