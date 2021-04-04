import React from "react";

export default function PickWidget({ name, src }) {
  return (
    <div>
      <img src={src} />
      <h3>{name}</h3>
    </div>
  );
}
