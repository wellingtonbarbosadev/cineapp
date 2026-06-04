import { Genres } from "../../components/Genres";
import { Hero } from "../../components/Hero";
import { Movies } from "../../components/Movies";
import { TextDivisors } from "../../components/TextDivisors";

import { movies } from "../../../data/movies.ts";

export function Home() {
  return (
    <div>
      <Hero />

      <TextDivisors text="Navegar por Gênero" />
      <Genres />

      <TextDivisors text="Populares" />

      {movies.map((movie) => (
        <Movies key={movie.id} {...movie} />
      ))}
    </div>
  );
}
