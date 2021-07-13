import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Main from "./pages/main/Main.jsx";
import AlbumsList from "./pages/albumsList/index.jsx";
import CreateAlbum from "./pages/createAlbum";
import CreateSong from "./pages/createSong";
import Profile from "./pages/profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/profile" component={Profile} />
      <Route path="/create/album" component={CreateAlbum} />
      <Route path="/create/song" component={CreateSong} />
      <Route path="/listar/albums" component={AlbumsList} />
      
    </BrowserRouter>
  );
}
