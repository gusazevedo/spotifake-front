import { useState } from "react";
import "./styles.css";
import api from "../../services/api";
import Navbar from "../../components/navbar";
import { Form } from "react-bootstrap";
import { useEffect } from "react";

export default function CreateSong({ history }) {
  const localData = localStorage.getItem("userData");
  const userData = JSON.parse(localData);

  const [albums, setAlbums] = useState([]);
  const [songData, setSongData] = useState({
    name: "",
    user_id: `${userData.userId}`,
    album_id: "",
  });

  useEffect(() => {
    api.get(`/list/albums/${userData.userId}`).then((response) => {
      setAlbums(response.data);
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    api.post("/upload/song", songData);

    history.push("/profile");
  }

  return (
    <>
      <Navbar />
      <div className="createSong-container">
        <h1 className="title">Cadastrar música</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              className="input-name"
              type="text"
              placeholder="Digite o nome da música"
              onChange={(e) =>
                setSongData({ ...songData, name: e.target.value })
              }
            />
            <Form.Group
              controlId="exampleForm.ControlSelect1"
              className="select"
            >
              <Form.Label>Selecione um álbum</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) =>
                  setSongData({ ...songData, album_id: e.target.value })
                }
              >
                {albums.map((album) => (
                  <option key={album.id} value={album.id}>
                    {album.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <div className="song-data"></div>
            <button type="submit">Salvar álbum</button>
          </form>
        </div>
      </div>
    </>
  );
}
