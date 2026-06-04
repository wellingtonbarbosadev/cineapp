import { Genres } from "../../components/Genres";
import { Hero } from "../../components/Hero";
import { TextDivisors } from "../../components/TextDivisors";

export function Home() {
  return (
    <div>
      <Hero />

      <TextDivisors text="Navegar por Gênero" />
      <Genres />

      <TextDivisors text="Populares" />
    </div>
  );
}
