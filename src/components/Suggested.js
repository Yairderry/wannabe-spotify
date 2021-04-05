import React from "react";

export default function Suggested({ collection, suggested }) {
  const songs = collection.filter((song) => suggested.songs.includes(song.id));
  return (
    <div>
      {songs.map((song) => {
        return (
          <div key={song.id}>
            <img src={song.cover_img} />
            <h4>{song.name}</h4>
            <span>{song.artist}</span>
            <span>{song.length}</span>
          </div>
        );
      })}
    </div>
  );
}
