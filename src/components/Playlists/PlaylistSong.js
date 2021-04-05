import React from "react";
import { NavLink } from "react-router-dom";

export default function PlaylistSong({ song, type, playlistId }) {
  const link = song.album
    ? `/song/${song.id}?${type}=${playlistId}`
    : `/album/${song.id}`;
  return (
    <NavLink className="playlist-song" to={link}>
      <img className="playlist-song-img" src={song.cover_img} alt={song.name} />
      <span className="song-name">{song.name}</span>
      {song.album ? (
        <span className="song-artist">{song.artist}</span>
      ) : (
        <span className="song-albums">
          {song.songs.length} {"song(s)"}
        </span>
      )}

      <span className="song-length">{song.length}</span>
    </NavLink>
  );
}
