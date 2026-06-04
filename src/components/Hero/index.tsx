import styles from "./styles.module.css";

export function Hero(movie: MovieInfo) {
  return (
    <div className={styles.hero}>
      <strong>Em destaque</strong>
      <h1>{movie.title}</h1>
      <p>{movie.synopsis}</p>
      <span>Ver Detalhes</span>
    </div>
  );
}
