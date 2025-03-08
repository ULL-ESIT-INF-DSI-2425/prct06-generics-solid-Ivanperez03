import * as fs from "fs";

/**
 * Usando esta interfaz nos aseguramos de al integrar nuevas funcionalidades, no modificamos FileHelper directamete
 * Principio de Open Close
 */
export interface FileHelper {
  read(): string;
  write(data: string): void;
}

/**
 * Clase que maneja la lectura y escritura de archivos locales
 * Depende solo de FileHelper (DIP)
 */
export class LocalFileHelper implements FileHelper {
  constructor(private filePath: string) {}

  /**
   * 
   * @returns - leido
   */
  read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      throw new Error(`Error al leer el archivo: ${error}`);
    }
  }

  /**
   * 
   * @param data - escrito
   */
  write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
    } catch (error) {
      throw new Error(`Error al escribir en el archivo: ${error}`);
    }
  }
}