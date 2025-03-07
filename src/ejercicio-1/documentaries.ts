import { BasicStreamableCollection } from "./basic";
import { DocumentaryVocal, StreamableItem } from "./streamable";

/**
 * Interfaz especifica para documental (opcional)
 */
export interface Documentary extends StreamableItem {
  vocal?: string;
}

/**
 * Subclase para los documentales, tipo de dato DOCUMENTAL
 */
export class DocumentaryCollection extends BasicStreamableCollection<Documentary> implements DocumentaryVocal<Documentary> {
  /**
   * 
   * @param vocal - parametro opcional , si tiene voz en off
   * @returns - item con ese vocal
   */
  searchByVocal(vocal: string): Documentary[] {
    return this.items.filter(documentary => documentary.vocal === vocal);
  }
}