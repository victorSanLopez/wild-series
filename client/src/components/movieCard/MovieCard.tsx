import type { movieType } from "../../types/movie";
import style from "./movieCard.module.css";

type movieCardProps = { movie: movieType };

export default function MovieCard({ movie }: movieCardProps) {
  return (
    <figure className={style.card}>
      <img className={style.img} src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <figcaption>{movie.synopsis}</figcaption>
      <figcaption>{movie.country}</figcaption>
      <figcaption>{movie.year}</figcaption>
    </figure>
  );
}
