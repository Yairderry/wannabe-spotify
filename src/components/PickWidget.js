import React from "react";

export default function PickWidget({ name, src }) {
  return (
    <div>
      <img className="pick-img" src={src} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}
