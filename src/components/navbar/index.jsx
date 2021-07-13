import "./styles.css";
import logo from "../../assets/logo.svg";
import { DropdownButton, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="right-corner">
        <img src={logo} alt="logo" />
        <span>Spotifake</span>
      </div>
      <div className="left-corner">
        <Button id="button" variant="primary">
          <Link to="/profile">Meu perfil</Link>
        </Button>
        <DropdownButton id="dropdown-basic-button" title="Albums">
          <Link to="/create/album">Cadastrar</Link>
          <Link to="/listar/albums">Listar</Link>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="Músicas">
          <Link to="/create/song">Cadastrar</Link>
        </DropdownButton>
      </div>
    </nav>
  );
}
