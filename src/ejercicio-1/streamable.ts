/**
 * Interfaz generica por defecto de streaming
 */
export interface StreamableItem {
  name: string;
  gender: string;
  duration: number;
}

/**
 * Interfaz con el tipo de coleccion
 */
export interface Streamable<T extends StreamableItem> {
  searchByDuration(duration: number): T[];
  searchByGender(gender: string): T[];
  searchByName(name: string): T[];
}

/**
 * Temporadas para las series
 */
export interface SeriesStreamable<T extends StreamableItem> extends Streamable<T> {
  searchBySeasons(seasons: number): T[];
}

/**
 * Actor para las peliculas
 */
export interface ActorStreamable<T extends StreamableItem> extends Streamable<T> {
  searchByActor(actor: string): T[];
}

/**
 * Voz en OFF para los documentales
 */
export interface DocumentaryVocal<T extends StreamableItem> extends Streamable<T> {
  searchByVocal(vocal: string): T[];
}
