import { Streamable, StreamableItem } from "./streamable";

/**
 * Representa la clase generica para la interfaz generica
 */
export abstract class BasicStreamableCollection<T extends StreamableItem> implements Streamable<T> {
  /**
   * 
   * @param items - items de la coleccion
   */
  constructor(protected items: T[]) {}

  /**
   * 
   * @param duration - duracion de la coleccion
   * @returns - el item con esa duracion
   */
  searchByDuration(duration: number): T[] {
    return this.items.filter(item => item.duration === duration);
  }

  /**
   * 
   * @param gender - genero de la coleccion
   * @returns - item con ese genero
   */
  searchByGender(gender: string): T[] {
    return this.items.filter(item => item.gender === gender);
  }

  /**
   * 
   * @param name - nombre de la coleccion
   * @returns - item con ese nombre
   */
  searchByName(name: string): T[] {
    return this.items.filter(item => item.name.indexOf(name) >= 0);
  }
}
