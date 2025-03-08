import { Discografia } from "./discografia";
import { Reproducible } from "./cancion";

/**
 * Representa el artista
 */
export class Artista<T extends Reproducible> {
  /**
   * 
   * @param nombre - nombre del artista
   * @param oyentes - oyentes mensuales del artista
   * @param discografia - su discografia
   */
  constructor(public nombre: string, public oyentes: number, public discografia: Discografia<T>) {}
  
  /**
   * metodo de informacion del artista
   */
  Informacion(): void {
    console.log(`🎤 Artista: ${this.nombre} | Oyentes Mensuales: ${this.oyentes}`);
    this.discografia.showInfo();
  }
}
