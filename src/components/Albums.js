import React from "react";
import { NavLink } from "react-router-dom";

export default function Albums({ collection }) {
  return (
    <>
      <h1 className="playlist-title">Albums</h1>
      <div className="playlists">
        {collection.map((playlist, i) => (
          <div className="playlist-display" key={i}>
            <NavLink to={`/album/${playlist.id}`}>
              <img
                className="playlist-img"
                src={playlist.cover_img}
                alt={playlist.name}
              />
              <h3>{playlist.name}</h3>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}
