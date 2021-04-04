import React from "react";

export default function PlaylistSong({ song }) {
  return (
    <div className="playlist-song">
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
    </div>
  );
}
