import styles from "./styles.module.css";

interface MovieInfo {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  director: string;
  synopsis: string;
  duration: string;
  emoji: string;
}

export function Movies(movie: MovieInfo) {
  return (
    <div className={styles.movies}>
      <div className={styles.movie}>
        <a href="#">
          <div>
            <div>{movie.emoji}</div>
            <span>{movie.rating}</span>
          </div>
          <p>{movie.title}</p>
          <span className={styles.year}>{movie.year}</span>
        </a>
      </div>
    </div>
  );
}
