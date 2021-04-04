import React from "react";
import PickWidget from "./PickWidget";
export default function TopFive({ type, list }) {
  return (
    <div className="top-five">
      <h2>Top 5 {type}</h2>
      <div className="top-five-pick">
        {list.map((pick, i) => (
          <PickWidget key={i} src={pick.cover_img} name={pick.name} />
        ))}
      </div>
    </div>
  );
}
