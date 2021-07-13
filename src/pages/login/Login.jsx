import { useState } from "react";
import logo from "../../assets/logo.svg";
import "./Login.css";
import api from "../../services/api";

export default function Login({ history }) {
  const [userLogin, setUserLogin] = useState({
    tag: "",
    password: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/login", userLogin);
    localStorage.setItem("userData", JSON.stringify(response.data));

    history.push("./profile");
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="logo" />
        <input
          value={userLogin.tag}
          placeholder="Digite seu nome de usuário"
          onChange={(e) => setUserLogin({ ...userLogin, tag: e.target.value })}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
        />
        <button type="submit">Logar</button>
      </form>
    </div>
  );
}
