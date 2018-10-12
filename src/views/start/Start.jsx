import React from "react";
import { Link } from "@reach/router";

import Button from "../../ui/Button";

export default function() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div> logo goes here</div>
      <div style={{ dispay: "flex", flexDirection: "column" }}>
        <div>
          <Button>Start</Button>
        </div>
        <div style={{ fontSize: "40px", marginTop: '30px' }}>
          <Link to="/leaderboard">
            <i className="fa fa-trophy" />
          </Link>
          <Link to="/directory">
            <i className="fa fa-address-book" />
          </Link>
          <Link to="/setup">
            <i className="fa fa-cog" />
          </Link>
        </div>
      </div>
    </div>
  );
}
