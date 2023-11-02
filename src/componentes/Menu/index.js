import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      <Link to="/">HomePage</Link>
      <Link to="/cadastro">Cadastro</Link>
    </div>
  );
}

export default Menu;
