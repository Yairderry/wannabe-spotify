import "./App.css";
import songs from "./DataBases/songs.js";
import albums from "./DataBases/albums.js";
import artists from "./DataBases/artists.js";
import playlists from "./DataBases/playlists.js";
function App() {
  return <div className="App">{albums[0].name}</div>;
}

export default App;
