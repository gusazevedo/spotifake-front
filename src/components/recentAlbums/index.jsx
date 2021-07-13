import { useEffect, useState } from "react";
import api from "../../services/api";

const RecentAlbums = () => {
  const [albums, setAlbums] = useState([]);

  const localData = localStorage.getItem("userData");
  const userData = JSON.parse(localData);

  useEffect(() => {
    api.get(`/list/albums/${userData.userId}`).then((response) => {
      setAlbums(response.data);
    });
  }, []);

  const recentAlbuns = albums.slice(0, 3);

  return (
    <div className="album-list">
      <h1>Albuns recentes</h1>
      <ul>
        {recentAlbuns.map((album) => (
          <li key={album.id}>
            <img src={album.cover} alt="imagem de perfil" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentAlbums;
