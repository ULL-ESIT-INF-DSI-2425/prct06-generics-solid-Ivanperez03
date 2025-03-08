import { FileHelper } from "./filehelper";

/**
 * Clase que gestiona archivos, pero sin acoplamiento a una implementación específica
 * Cumplimos Open CLose y DIP, pues depende de FileHelper, no de fs
 */
export class FileManager {
  constructor(private fileHandler: FileHelper) {}

  /**
   * 
   * @returns - leido
   */
  readFile(): string {
    try {
      return this.fileHandler.read();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error occurred");
      }
      return "";
    }
  }

  /**
   * 
   * @param data - escrito
   */
  writeFile(data: string): void {
    try {
      this.fileHandler.write(data);
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Unknown error occurred");
      }
    }
  }
}
