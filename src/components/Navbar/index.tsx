import { useNavigate } from "react-router";
import styles from "./styles.module.css";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <nav className={styles.navbar}>
        <strong className={styles.logo}>CINE</strong>
        <section>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/")}>Filmes</button>
        </section>
        <button className={styles.search} onClick={() => navigate("/")}>
          🔍
        </button>
      </nav>
    </header>
  );
}
