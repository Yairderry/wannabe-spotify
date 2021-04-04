import React from "react";
import PlaylistSong from "./PlaylistSong";

export default function PlaylistContent({ songs }) {
  return (
    <div className="playlist-songs">
      {songs.map((song, i) => (
        <PlaylistSong key={i} song={song} />
      ))}
    </div>
  );
}
