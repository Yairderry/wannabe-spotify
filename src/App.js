import "./App.css";
import Navbar from "./components/Navbar.js";

import { BrowserRouter, Switch, Route } from "react-router-dom";
// import songs from "./DataBases/songs.js";
// import albums from "./DataBases/albums.js";
// import artists from "./DataBases/artists.js";
// import playlists from "./DataBases/playlists.js";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
