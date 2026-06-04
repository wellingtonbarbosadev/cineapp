import styles from "./styles.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <strong>Em destaque</strong>
      <h1>Interestelar</h1>
      <p>
        Um grupo de astronautas viaja através de uma passagem no espaço-tempo em
        busca de um novo lar.
      </p>
      <span>Ver Detalhes</span>
    </div>
  );
}
