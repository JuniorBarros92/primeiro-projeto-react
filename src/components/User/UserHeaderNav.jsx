import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MinhasFotos from "../../Assets/feed.svg?react";
import Estatisticas from "../../Assets/estatisticas.svg?react";
import AdiconarFoto from "../../Assets/adicionar.svg?react";
import Sair from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {

    const [mobileMenu, setMobileMenu] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <MinhasFotos />
        {mobileMenu && "Minhas fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobileMenu && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdiconarFoto />
        {mobileMenu && "Adicionar Foto"}
      </NavLink>

      <button onClick={userLogout}>
        {" "}
        <Sair /> {mobileMenu && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
