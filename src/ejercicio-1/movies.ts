import { BasicStreamableCollection } from "./basic";
import { ActorStreamable, StreamableItem } from "./streamable";

/**
 * Interfaz especifica para peliculas
 */
export interface Movie extends StreamableItem {
  actor: string;
}

/**
 * Subclase para las peliculas, tipo de dato PELICULA
 */
export class MovieCollection extends BasicStreamableCollection<Movie> implements ActorStreamable<Movie> {
  /**
   * 
   * @param actor - actor de esa pelicula
   * @returns - item con ese actor
   */
  searchByActor(actor: string): Movie[] {
    return this.items.filter(movie => movie.actor === actor);
  }
}
