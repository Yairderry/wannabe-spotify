import React, { lazy, Suspense } from "react";

import albums from "../DataBases/albums";
import artists from "../DataBases/artists";
import playlists from "../DataBases/playlists";
import songs from "../DataBases/songs";

import {
  BrowserRouter,
  Redirect,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

const Home = lazy(() => import("./Home.js"));
const Playlists = lazy(() => import("./Playlists.js"));
const Albums = lazy(() => import("./Albums.js"));
const Artists = lazy(() => import("./Artists.js"));
const NotFound = lazy(() => import("./NotFound.js"));
const Songs = lazy(() => import("./Songs.js"));
const Playlist = lazy(() => import("./Playlists/Playlist"));
const Song = lazy(() => import("./Song"));

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
  const activeStyling = {
    backgroundColor: "green",
    color: "white",
    boxShadow: "0px 4px white",
    transition: "0.5s",
  };
  return (
    <>
      <BrowserRouter>
        <nav className="main-nav">
          <NavLink className="sub-nav" activeStyle={activeStyling} exact to="/">
            Wannabe Spotify
          </NavLink>
          <NavLink
            className="sub-nav"
            activeStyle={activeStyling}
            exact
            to="/songs"
          >
            Songs
          </NavLink>
          <NavLink
            className="sub-nav"
            activeStyle={activeStyling}
            exact
            to="/albums"
          >
            Albums
          </NavLink>
          <NavLink
            className="sub-nav"
            activeStyle={activeStyling}
            exact
            to="/artists"
          >
            Artists
          </NavLink>
          <NavLink
            className="sub-nav"
            activeStyle={activeStyling}
            exact
            to="/playlists"
          >
            Playlists
          </NavLink>
        </nav>

        <Suspense fallback={<div class="loader"></div>}>
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

            <Route>
              <Redirect to="/404"></Redirect>
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
