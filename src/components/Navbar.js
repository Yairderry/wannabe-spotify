import React from "react";

import Home from "./Home.js";
import Playlists from "./Playlists.js";
import Albums from "./Albums.js";
import Artists from "./Artists.js";
import NotFound from "./NotFound.js";
import Songs from "./Songs.js";
import Playlist from "./Playlists/Playlist";
import Song from "./Song";

import albums from "../DataBases/albums";
import artists from "../DataBases/artists";
import playlists from "../DataBases/playlists";
import songs from "../DataBases/songs";

import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";

const songsWithImages = songs.map((song) => {
  const { cover_img } = albums.find((album) => album.name === song.album);
  song.cover_img = cover_img;
  return song;
});

const topFiveSongs = songsWithImages
  .sort((a, b) => b.views - a.views)
  .slice(0, 5);
const topFiveAlbums = albums.slice(0, 5);
const topFivePlaylists = playlists.slice(0, 5);
const topFiveArtists = artists.slice(0, 5);

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <nav className="main-nav">
          <NavLink
            className="sub-nav"
            activeStyle={{ backgroundColor: "green", color: "white" }}
            exact
            to="/"
          >
            Wannabe Spotify
          </NavLink>
          <NavLink
            className="sub-nav"
            activeStyle={{ backgroundColor: "green", color: "white" }}
            exact
            to="/songs"
          >
            Songs
          </NavLink>
          <NavLink
            className="sub-nav"
            activeStyle={{ backgroundColor: "green", color: "white" }}
            exact
            to="/albums"
          >
            Albums
          </NavLink>
          <NavLink
            className="sub-nav"
            activeStyle={{ backgroundColor: "green", color: "white" }}
            exact
            to="/artists"
          >
            Artists
          </NavLink>
          <NavLink
            className="sub-nav"
            activeStyle={{ backgroundColor: "green", color: "white" }}
            exact
            to="/playlists"
          >
            Playlists
          </NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home
              songs={topFiveSongs}
              playlists={topFivePlaylists}
              artists={topFiveArtists}
              albums={topFiveAlbums}
            />
          </Route>
          <Route exact path="/songs">
            <Songs collection={songsWithImages} />
          </Route>
          <Route exact path="/playlists">
            <Playlists collection={playlists} />
          </Route>
          <Route exact path="/albums">
            <Albums collection={albums} />
          </Route>
          <Route exact path="/artists">
            <Artists collection={artists} />
          </Route>
          <Route path="/playlist/:id">
            <Playlist
              collection={playlists}
              songs={songsWithImages}
              type="playlist"
            />
          </Route>
          <Route path="/album/:id">
            <Playlist
              collection={albums}
              songs={songsWithImages}
              type="album"
            />
          </Route>
          <Route path="/artist/:id">
            <Playlist
              collection={artists}
              songs={songsWithImages}
              albums={albums}
              type="artist"
            />
          </Route>
          <Route path="/song/:id">
            <Song
              collection={songsWithImages}
              albums={albums}
              playlists={playlists}
              artists={artists}
            />
          </Route>
          <Route path="/404" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
