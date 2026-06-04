import { Genres } from "../../components/Genres";
import { Hero } from "../../components/Hero";
import { Movies } from "../../components/Movies";
import { TextDivisors } from "../../components/TextDivisors";

import styles from "./styles.module.css";
import { movies } from "../../../data/movies.ts";

export function Home() {
  const movie = movies[0];
  return (
    <div>
      <Hero {...movie} />

      <TextDivisors text="Navegar por Gênero" />
      <Genres />

      <TextDivisors text="Populares" />

      <div className={styles.movies}>
        {movies.map((movie) => (
          <Movies key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
