import { BasicStreamableCollection } from "./basic";
import { SeriesStreamable, StreamableItem } from "./streamable";

/**
 * Interfaz especifica para series
 */
export interface Series extends StreamableItem {
  seasons: number;
}

/**
 * Subclase para las series, tipo de dato SERIE
 */
export class SeriesCollection extends BasicStreamableCollection<Series> implements SeriesStreamable<Series> {
  /**
   * 
   * @param seasons - temporadas de la serie
   * @returns - item con esas temporadas
   */
  searchBySeasons(seasons: number): Series[] {
    return this.items.filter(series => series.seasons === seasons);
  }
}
