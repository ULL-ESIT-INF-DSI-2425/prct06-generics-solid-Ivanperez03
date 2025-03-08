import { Cancion, Reproducible } from "./cancion";

/**
 * Representa un disco con múltiples canciones
 */
export class Disco implements Reproducible {
  constructor(public nombre: string, public anio: number, public canciones: Cancion[]) {}

  /**
   * 
   * @returns - canciones totales del disco
   */
  cancionesTotales(): number {
    return this.canciones.length;
  }

  /**
   * 
   * @returns - duracion total de todas las canciones del disco
   */
  duracionTotal(): number {
    return this.canciones.reduce((total, cancion) => total + cancion.duracion, 0);
  }

  /**
   * 
   * @returns - reproducciones totales de las canciones del disco
   */
  reproduccionesTotales(): number {
    return this.canciones.reduce((total, cancion) => total + cancion.reproducciones, 0);
  }

  /**
   * metodo de informacion del disco
   */
  showInfo(): void {
    console.log(`Álbum: ${this.nombre} (${this.anio})`);
    console.table(this.canciones.map(c => ({
      Nombre: c.nombre,
      Duración: `${c.duracion}s`,
      Géneros: c.generos.join(", "),
      Reproducciones: c.reproducciones
    })));
  }
}
