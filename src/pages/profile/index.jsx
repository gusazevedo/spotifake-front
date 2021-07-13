import { Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../components/navbar";
import api from "../../services/api";
import "./styles.css";

import { FaTrashAlt } from "react-icons/fa";
import RecentAlbums from "../../components/recentAlbums";

const Profile = ({ history }) => {
  const [recentSongs, setRecentSongs] = useState(null);

  const localData = localStorage.getItem("userData");
  const userData = JSON.parse(localData);

  useEffect(() => {
    api.get(`/list/songs/${userData.userId}`).then((response) => {
      setRecentSongs(response.data);
    });
  }, []);

  function handleDelete(song_id) {
    api.delete(`/delete/song/${song_id}`);
    history.push("/profile");
  }

  return (
    <div className="my-container">
      <Navbar />
      <div className="profile-container">
        <section className="left-corner">
          <div className="my-profile">
            <img
              className="protile-pic"
              src="https://i.pinimg.com/originals/a7/35/bd/a735bd89df1a0fb4c80ffa583585943e.jpg"
              alt="imagem de perfil"
            />
            <h1>Gustavo Azevedo</h1>
            <div className="profile-followers">
              <div className="seguindo">
                <span>Seguindo</span>
                <span>120</span>
              </div>
              <div className="seguidores">
                <span>Seguidores</span>
                <span>130</span>
              </div>
            </div>
          </div>
        </section>
        <section className="right-corner">
          <RecentAlbums />
          <div className="songs-list">
            <h1>Músicas recentes</h1>
            <table>
              <thead>
                <tr>
                  <th>Nome da música</th>
                  <th>Albúm</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {recentSongs &&
                  recentSongs.map((song) => {
                    return (
                      <tr key={song.id}>
                        <td>{song.name}</td>
                        <td>{song.album_id}</td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => handleDelete(song.id)}
                          >
                            <FaTrashAlt />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
