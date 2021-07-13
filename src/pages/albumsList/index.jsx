import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../components/navbar";
import api from "../../services/api";
import "./styles.css";

const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);

  const localData = localStorage.getItem("userData");
  const userData = JSON.parse(localData);

  useEffect(() => {
    api.get(`/list/albums/${userData.userId}`).then((response) => {
      setAlbums(response.data);
    });
  }, []);

  function handleDelete(album_id) {
    api.delete(`/delete/album/${album_id}`);
  }

  return (
    <div className="albums-continer">
      <Navbar />
      <h1 className="title">Albums</h1>
      <div className="albums-grid">
        {albums.map((album) => (
          <div className="album-card" key={album.id}>
            <img src={album.cover} />
            <span>{album.name}</span>
            <button variant="danger" onClick={() => handleDelete(album.id)}>
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumsList;
