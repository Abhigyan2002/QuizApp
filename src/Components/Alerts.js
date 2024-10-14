import React from "react";

function Alerts(props) {
  return (
    <div className="container">
      <div className={`alert alert-${props.type} d-flex justify-content-between align-items-center`} role="alert">
        {props.type === "success" ? "Correct ans" : "Wrong ans"}
        <div class="spinner-border" role="status" style={{alignItems:'end'}}>
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Alerts;
