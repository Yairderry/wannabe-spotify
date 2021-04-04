import React from "react";
import PickWidget from "./PickWidget";
export default function TopFive({ type }) {
  return (
    <div className="top-five">
      <h2>Top 5 {type}</h2>
      <PickWidget />
    </div>
  );
}
