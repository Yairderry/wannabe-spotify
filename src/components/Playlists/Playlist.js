import React from "react";
import { useParams } from "react-router-dom";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistContent from "./PlaylistContent";
import PlaylistAlbum from "./PlaylistAlbum";

export default function Playlist({ collection, songs, albums }) {
  const { id } = useParams();
  const playlist = collection.find((playlist) => playlist.id === id);
  const playlistSongs = songs.filter((song) =>
    playlist.songs.includes(song.id)
  );

  const playlistAlbums = albums
    ? albums.filter((song) => playlist.albums.includes(song.id))
    : undefined;

  return (
    <div className="playlist">
      <PlaylistHeader playlist={playlist} />
      {playlist.album && <PlaylistAlbum />}
      <PlaylistContent albums={playlistAlbums} songs={playlistSongs} />
    </div>
  );
}
