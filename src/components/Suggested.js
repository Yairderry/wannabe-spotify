import React from "react";
import { NavLink } from "react-router-dom";

export default function Suggested({ collection, suggested, query }) {
  const songs = suggested
    ? collection.filter((song) => suggested.songs.includes(song.id))
    : collection;

  return (
    <div className="suggested">
      <h3>Suggested</h3>
      {songs.map((song) => {
        return (
          <NavLink
            className="playlist-song"
            to={`/song/${song.id}${query}`}
            key={song.id}
          >
            <img
              className="playlist-song-img"
              src={song.cover_img}
              alt={song.name}
            />
            <h4 className="song-name">{song.name}</h4>
            <span className="song-artist">{song.artist}</span>
            <span className="song-length">{song.length}</span>
          </NavLink>
        );
      })}
    </div>
  );
}
