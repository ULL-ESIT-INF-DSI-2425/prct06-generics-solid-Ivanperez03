import { Cancion, Reproducible } from "./cancion";

/**
 * Representa un single
 */
export class Single implements Reproducible{
  /**
   * 
   * @param nombre - nombre del single
   * @param anio - anio de salida del single
   * @param cancion - unica cacion
   */
  constructor(public nombre: string, public anio: number, public cancion: Cancion) {}

  /**
   * 
   * @returns - duracion del single
   */
  duracionTotal(): number {
    return this.cancion.duracion;
  }

  /**
   * 
   * @returns - reproducciones del single
   */
  reproduccionesTotales(): number {
    return this.cancion.reproducciones;
  }

  /**
   * metodo de informacion del single
   */
  showInfo(): void {
    console.log(`Single: ${this.nombre} (${this.anio})`);
    this.cancion.informacion();
  }
}
