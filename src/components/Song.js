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

  const [paramId, list] = playlist
    ? [playlist, playlists]
    : album
    ? [album, albums]
    : [artist, artists];

  const suggested = list.find((song) => song.id === paramId);
  const song = collection.find((song) => song.id === id);
  return (
    <div>
      <h1>{song.name}</h1>
      <Suggested collection={collection} suggested={suggested} />
      <div>
        <h3>Lyrics</h3>
        <span>{song.lyrics}</span>
        <YouTube videoId={song.id} />
      </div>
    </div>
  );
}
