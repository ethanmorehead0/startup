import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

export function LogedIn(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userName");
    props.onLogout();
  }

  return (
    <div>
      <div className="playerName">{props.userName}</div>
      <Button variant="primary" onClick={() => navigate("/play")}>
        Play
      </Button>
      <Button variant="secondary" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
