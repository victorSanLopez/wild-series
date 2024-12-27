import { useEffect, useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import style from "./programsPage.module.css";
import type { movieType } from "../../types/movie";

export default function Programs() {
  const [movies, setMovies] = useState<movieType[]>([]); // État pour stocker les films

  // Fonction pour récupérer les films depuis l'API
  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => setMovies(data as movieType[]))
      .catch((error) =>
        console.error("Erreur avec le chargement des données :", error),
      );
  }, []);

  return (
    <div>
      <h2>Liste des films</h2>
      <div className={style.programs}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
