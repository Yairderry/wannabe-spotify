import React from "react";
import PickWidget from "./PickWidget";
import { Link } from "react-router-dom";

export default function TopFive({ type, list }) {
  return (
    <div className="top-five">
      <Link className="top-five-title" to={`/${type.toLowerCase()}s`}>
        Top 5 {type}s
      </Link>
      <div className="top-five-pick">
        {list.map((pick, i) => (
          <PickWidget
            key={i}
            src={pick.cover_img}
            name={pick.name}
            pickId={pick.id}
            type={type}
          />
        ))}
      </div>
    </div>
  );
}
