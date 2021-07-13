import { useState } from "react";
import "./styles.css";
import api from "../../services/api";
import Navbar from "../../components/navbar";

export default function CreateAlbum({ history }) {
  const localData = localStorage.getItem("userData");
  const userData = JSON.parse(localData);

  const [albumData, setAlbumData] = useState({
    name: "",
    user_id: `${userData.userId}`,
    cover: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    api.post("/create/album", albumData);
    history.push("/profile");
  }

  return (
    <>
      <Navbar />
      <div className="createSong-container">
        <h1>Cadastrar Album</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              className="input-name"
              type="text"
              placeholder="Digite o nome da álbum"
              onChange={(e) =>
                setAlbumData({ ...albumData, name: e.target.value })
              }
            />
            <input
              className="input-name"
              type="text"
              placeholder="Link da imagem de capa"
              onChange={(e) =>
                setAlbumData({ ...albumData, cover: e.target.value })
              }
            />
            <div className="song-data"></div>
            <button type="submit">Salvar álbum</button>
          </form>
        </div>
      </div>
    </>
  );
}
