import { Link } from "react-router";
import styles from "./styles.module.css";

export function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Página não encontrada</p>
      <p className={styles.description}>
        A página que você está procurando não existe ou foi removida.
      </p>
      <Link to="/" className={styles.button}>
        Voltar ao início
      </Link>
    </div>
  );
}
