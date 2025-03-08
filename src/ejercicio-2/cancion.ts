/**
 * Interfaz que representa un elemento reproducible de la discografía
 */
export interface Reproducible {
  showInfo(): void;
}

/**
 * Represneta una cancion
 */
export class Cancion {
  /**
   * 
   * @param nombre - nombre de la cancion
   * @param duracion  - duracion de la cancion
   * @param generos - generos de la cancion
   * @param single  - si la cancion es un single o no
   * @param reproducciones - reproducciones de la cancion
   */
  constructor(public nombre: string, public duracion: number, public generos: string[],
    public reproducciones: number) {}

  informacion(): void {
    console.log(`${this.nombre} - ${this.duracion}s - ${this.generos.join(", ")}`);
    console.log(`Reproducciones: ${this.reproducciones}`);
  }

}