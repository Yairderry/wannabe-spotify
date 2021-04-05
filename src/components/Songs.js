import React from "react";
import { NavLink } from "react-router-dom";

export default function Songs({ collection }) {
  return (
    <>
      <h1 className="playlist-title">Songs</h1>
      <div className="playlists">
        {collection.map((playlist, i) => (
          <NavLink
            to={`/song/${playlist.id}`}
            className="playlist-display"
            key={i}
          >
            <img
              className="playlist-img"
              src={playlist.cover_img}
              alt={playlist.name}
            />
            <h3>{playlist.name}</h3>
          </NavLink>
        ))}
      </div>
    </>
  );
}
