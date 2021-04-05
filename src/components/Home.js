import React from "react";
import TopFive from "./TopFive";

export default function Home({ songs, playlists, artists, albums }) {
  return (
    <div>
      <TopFive type="Song" list={songs} />
      <TopFive type="Artist" list={artists} />
      <TopFive type="Album" list={albums} />
      <TopFive type="Playlist" list={playlists} />
    </div>
  );
}
