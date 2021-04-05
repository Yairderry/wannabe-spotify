import React from "react";
import { Link } from "react-router-dom";

export default function PickWidget({ name, src, pickId, type }) {
  return (
    <Link to={`/${type.toLowerCase()}/${pickId}`}>
      <div>
        <img className="pick-img" src={src} alt={name} />
        <h3>{name}</h3>
      </div>
    </Link>
  );
}
