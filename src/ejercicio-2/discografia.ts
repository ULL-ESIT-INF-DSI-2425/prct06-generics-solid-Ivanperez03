import { Reproducible } from "./cancion";

/**
 * Clase genérica que representa la discografía de un artista.
 * Puede contener discos, singles o ambos.
 */
export class Discografia<T extends Reproducible> {
  constructor(public nombre: string, public coleccion: T[]) {}

  totalElementos(): number {
    return this.coleccion.length;
  }

  showInfo(): void {
    console.log(`📚 Discografía: ${this.nombre}`);
    this.coleccion.forEach(item => item.showInfo());
  }
}
