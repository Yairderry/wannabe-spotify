import React from "react";
import PlaylistSong from "./PlaylistSong";

export default function PlaylistContent({ songs, albums, type, playlistId }) {
  return (
    <div className="playlist-songs">
      {albums && (
        <>
          <h2>Albums</h2>
          {albums.map((song, i) => (
            <PlaylistSong
              type={type}
              key={i}
              song={song}
              playlistId={playlistId}
            />
          ))}
        </>
      )}
      <h2>Songs</h2>
      {songs.map((song, i) => (
        <PlaylistSong type={type} key={i} song={song} playlistId={playlistId} />
      ))}
    </div>
  );
}
