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
const ErrorBoundary = lazy(() => import("./ErrorBoundary"));

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

        <Suspense fallback={<div className="loader"></div>}>
          <Switch>
            <Route exact path="/">
              <ErrorBoundary>
                <Home
                  songs={topFiveSongs}
                  playlists={topFivePlaylists}
                  artists={topFiveArtists}
                  albums={topFiveAlbums}
                />
              </ErrorBoundary>
            </Route>
            <Route exact path="/songs">
              <ErrorBoundary>
                <Songs collection={songsWithImages} />
              </ErrorBoundary>
            </Route>
            <Route exact path="/playlists">
              <ErrorBoundary>
                <Playlists collection={playlists} />
              </ErrorBoundary>
            </Route>
            <Route exact path="/albums">
              <ErrorBoundary>
                <Albums collection={albums} />
              </ErrorBoundary>
            </Route>
            <Route exact path="/artists">
              <ErrorBoundary>
                <Artists collection={artists} />
              </ErrorBoundary>
            </Route>
            <Route exact path="/playlist/:id">
              <ErrorBoundary>
                <Playlist
                  collection={playlists}
                  songs={songsWithImages}
                  type="playlist"
                />
              </ErrorBoundary>
            </Route>
            <Route exact path="/album/:id">
              <ErrorBoundary>
                <Playlist
                  collection={albums}
                  songs={songsWithImages}
                  type="album"
                />
              </ErrorBoundary>
            </Route>
            <Route exact path="/artist/:id">
              <ErrorBoundary>
                <Playlist
                  collection={artists}
                  songs={songsWithImages}
                  albums={albums}
                  type="artist"
                />
              </ErrorBoundary>
            </Route>
            <Route exact path="/song/:id">
              <ErrorBoundary>
                <Song
                  collection={songsWithImages}
                  albums={albums}
                  playlists={playlists}
                  artists={artists}
                />
              </ErrorBoundary>
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
