import React from "react";

export default function PlaylistHeader({ playlist }) {
  return (
    <div className="playlist-header">
      <img
        className="playlist-img"
        src={playlist.cover_img}
        alt={playlist.name}
      />
      <div className="playlist-data">
        <h1>{playlist.name}</h1>
        <div className="playlist-details">
          {playlist.created_at ? (
            <span>Type: Playlist</span>
          ) : playlist.artist ? (
            <span>Type: Album</span>
          ) : (
            <span>Type: Artist</span>
          )}
          {playlist.created_at && (
            <span>
              Created At: {new Date(playlist.created_at).toDateString()}
            </span>
          )}
          {playlist.artist && <span>Artist: {playlist.artist}</span>}
          {playlist.albums && (
            <span>Number of Albums: {playlist.albums.length}</span>
          )}
          <span>Number of Songs: {playlist.songs.length}</span>
        </div>
        <div>
          <button>play</button>
          <button>shuffle</button>
        </div>
      </div>
    </div>
  );
}
