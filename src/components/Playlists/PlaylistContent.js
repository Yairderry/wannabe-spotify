import React from "react";
import PlaylistSong from "./PlaylistSong";

export default function PlaylistContent({ songs, albums }) {
  return (
    <div className="playlist-songs">
      {albums && (
        <>
          <h2>Albums</h2>
          {albums.map((song, i) => (
            <PlaylistSong key={i} song={song} />
          ))}
        </>
      )}
      <h2>Songs</h2>
      {songs.map((song, i) => (
        <PlaylistSong key={i} song={song} />
      ))}
    </div>
  );
}
