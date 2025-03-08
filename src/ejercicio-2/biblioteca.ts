import { Artista } from "./artista";
import { Reproducible } from "./cancion";

/**
 * Representa una biblioteca musical
 */
export class Biblioteca<T extends Reproducible> {
  /**
   * @param artistas - array de artistas de la biblioteca
   */
  private artistas: Artista<T>[] = [];
  /**
   * mostrar informacion sobre la biblioteca
   */
  mostrarBiblioteca(): void {
    console.log("Biblioteca Musical");
    console.table(this.artistas.map(artista => ({
      Artista: artista.nombre,
      Oyentes: artista.oyentes,
      Discografía: artista.discografia.totalElementos()
    })));
  }

  /**
   * 
   * @param artista - agregar artistas a la biblioteca
   */
  addArtista(artista: Artista<T>): void {
    this.artistas.push(artista);
  }

  /**
   * 
   * @param nombre - nombre del artista
   * @returns - artista encontrado
   */
  buscarArtista(nombre: string): Artista<T>[] {
    return this.artistas.filter(artista => artista.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }
}