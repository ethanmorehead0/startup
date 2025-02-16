import React from "react";
import "./scores.css";
export function Scores() {
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
        <tbody>
          <tr>
            <td>1</td>
            <td>Jonny</td>
            <td>135</td>
            <td>4</td>
            <td>Jan 20, 2025</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Andy</td>
            <td>134</td>
            <td>4</td>
            <td>Jan 2, 2025</td>
          </tr>
          <tr>
            <td>3-10</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
      <h2 className="title">Highscore</h2>
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
        <tbody>
          <tr>
            <td>42</td>
            <td>Username</td>
            <td>27</td>
            <td>2</td>
            <td>Jan 14, 2025</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
