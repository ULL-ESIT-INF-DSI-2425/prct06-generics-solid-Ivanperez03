/**
 * Interfaz para dispositivos que pueden imprimir
 * IGP
 */
export interface Printable {
  print(): void;
}

/**
 * Interfaz para dispositivos que pueden escanear
 * IGP
 */
export interface Scannable {
  scan(): void;
}

/**
 * Representa una impresora que solo imprime
 */
export class Printer implements Printable {
  print(): void {
    console.log("Printing...");
  }
}

/**
 * Representa un escáner que solo escanea
 */
export class Scanner implements Scannable {
  scan(): void {
    console.log("Scanning...");
  }
}

/**
 * Representa un dispositivo que puede imprimir y escanear
 */
export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log("Printing...");
  }

  scan(): void {
    console.log("Scanning...");
  }
}
