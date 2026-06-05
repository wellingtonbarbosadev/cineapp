import { useLocation, useNavigate } from "react-router";
import styles from "./styles.module.css";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isMoviePage = location.pathname.startsWith("/movie/");

  return (
    <header>
      <nav className={styles.navbar}>
        <strong className={styles.logo}>CINE</strong>
        <section>
          <button onClick={() => navigate("/")}>Home</button>
          <button
            className={isMoviePage ? styles.active : ""}
            onClick={() => navigate("/")}
          >
            Filmes
          </button>
        </section>
        <button className={styles.search} onClick={() => navigate("/")}>
          🔍
        </button>
      </nav>
    </header>
  );
}
