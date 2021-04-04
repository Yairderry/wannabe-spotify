import React from "react";

export default function PlaylistHeader({ playlist }) {
  console.log(playlist.cover_img);
  return (
    <div>
      <img
        className="playlist-img"
        src={playlist.cover_img}
        alt={playlist.name}
      />
      <h1>{playlist.name}</h1>
      <div>
        <span>{new Date(playlist.created_at).toDateString()}</span>
        <span>{playlist.songs.length} songs</span>
      </div>
      <div>
        <button>play</button>
        <button>shuffle</button>
      </div>
    </div>
  );
}
