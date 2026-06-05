import styles from "./styles.module.css";
import { useNavigate } from "react-router";
import { useParams } from "react-router";

import { movies } from "../../../data/movies";
import { TextDivisors } from "../TextDivisors";

export function MovieInfo() {
  const navigate = useNavigate();

  const { id } = useParams();

  const movie = movies.find((movie) => movie.id === Number(id));

  function goToHome() {
    navigate("/");
  }

  return (
    <div className={styles.movie}>
      <button className={styles.backButton} onClick={goToHome}>
        ← Voltar para Filmes
      </button>

      <div className={styles.hero}>
        <span className={styles.emoji}>{movie?.emoji}</span>
        <h1>{movie?.title}</h1>
        <div className={styles.meta}>
          <span>📅 {movie?.year}</span>
          <span>🕐 {movie?.duration}</span>
          <span>⭐ {movie?.rating}</span>
        </div>
      </div>

      <div className={styles.info}>
        <TextDivisors text="GÊNEROS" />
        <div className={styles.genre}>
          <span>{movie?.genre}</span>
        </div>

        <TextDivisors text="SINOPSE" />
        <p>{movie?.synopsis}</p>

        <TextDivisors text="DIRETOR" />
        <p>{movie?.director}</p>
      </div>

      <button className={styles.watchButton}>▶ Assistir Agora</button>
    </div>
  );
}
