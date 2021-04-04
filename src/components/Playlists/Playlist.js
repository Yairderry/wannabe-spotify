import React from "react";
import { useParams } from "react-router-dom";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistContent from "./PlaylistContent";

export default function Playlist({ collection, songs }) {
  const { id } = useParams();
  const playlist = collection.find((playlist) => playlist.id === id);
  const playlistSongs = songs.filter((song) =>
    playlist.songs.includes(song.id)
  );

  return (
    <div className="playlist">
      <PlaylistHeader playlist={playlist} />
      <PlaylistContent songs={playlistSongs} />
    </div>
  );
}
