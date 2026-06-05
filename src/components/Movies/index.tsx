import styles from "./styles.module.css";
import { useNavigate } from "react-router";

export function Movies(movie: MovieInfo) {
  return (
    <div className={styles.movie}>
      <a href={`/movie/${movie.id}`}>
        <div>
          <div>{movie.emoji}</div>
          <span>{movie.rating}</span>
        </div>
        <p title={movie.title}>{movie.title}</p>
        <span className={styles.year}>{movie.year}</span>
      </a>
    </div>
  );
}
