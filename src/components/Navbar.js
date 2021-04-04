import React from "react";

import Home from "./Home.js";
import Playlists from "./Playlists.js";
import Albums from "./Albums.js";
import Artists from "./Artists.js";
import NotFound from "./NotFound.js";
import Songs from "./Songs.js";

import songs from "../DataBases/songs";
import albums from "../DataBases/albums";
import artists from "../DataBases/artists";
import playlists from "../DataBases/playlists";

import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <span>Wannabe Spotify</span>
          <NavLink activeStyle={{ color: "green" }} exact to="/">
            Home
          </NavLink>
          <NavLink activeStyle={{ color: "green" }} exact to="/songs">
            Songs
          </NavLink>
          <NavLink activeStyle={{ color: "green" }} exact to="/albums">
            Albums
          </NavLink>
          <NavLink activeStyle={{ color: "green" }} exact to="/artists">
            Artists
          </NavLink>
          <NavLink activeStyle={{ color: "green" }} exact to="/playlists">
            Playlists
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/songs" component={Songs} />
          <Route exact path="/playlists" component={Playlists} />
          <Route exact path="/albums" component={Albums} />
          <Route exact path="/artists" component={Artists} />
          <Route path="/404" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
