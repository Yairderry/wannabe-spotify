import React from "react";
import { NavLink } from "react-router-dom";

export default function Artists({ collection }) {
  return (
    <>
      <h1 className="playlist-title">Artists</h1>
      <div className="playlists">
        {collection.map((playlist, i) => (
          <NavLink
            to={`/artist/${playlist.id}`}
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
