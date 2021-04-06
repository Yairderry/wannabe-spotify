import React from "react";
import { useParams, useLocation } from "react-router-dom";
import YouTube from "react-youtube";

import Suggested from "./Suggested";

export default function Song({ collection, artists, playlists, albums }) {
  const { id } = useParams();

  const params = new URLSearchParams(useLocation().search);
  const playlist = params.get("playlist");
  const album = params.get("album");
  const artist = params.get("artist");

  const [paramId, list, type] = playlist
    ? [playlist, playlists, "playlist"]
    : album
    ? [album, albums, "album"]
    : [artist, artists, "artist"];

  const suggested = list.find((song) => song.id === paramId);

  const songs = suggested
    ? collection.filter((song) => suggested.songs.includes(song.id))
    : collection;

  const song = collection.find((song) => song.id === id);
  const query = paramId ? `?${type}=${paramId}` : "";
  return (
    <div className="song">
      <div className="song-div">
        <h1>{song.name}</h1>
        <YouTube
          className="youtube-link"
          videoId={song.id}
          opts={{
            playerVars: {
              autoplay: 1,
            },
          }}
        />
        <Suggested collection={songs} query={query} />
      </div>
      <div className="lyrics">
        <h3>Lyrics</h3>
        <span>{song.lyrics}</span>
      </div>
    </div>
  );
}
