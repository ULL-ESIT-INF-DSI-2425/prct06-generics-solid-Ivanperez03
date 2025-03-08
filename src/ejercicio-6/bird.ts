/**
 * El principio violado es el de Liskov (LSP) pues la clase Penguin hereda de Bird pero no puede volar
 * Separamos las aves voladoras y no voladoras usando abstraccion adecuada
 */

/**
 * Interfaz para aves que pueden volar
 */
export interface Flyable {
  fly(): void;
}

/**
 * Clase base para todas las aves
 */
export class Bird {
  eat(): void {
    console.log("Eating...");
  }
}

/**
 * Gorrión: un pájaro que puede volar
 */
export class Sparrow extends Bird implements Flyable {
  fly(): void {
    console.log("Flying...");
  }
}

/**
 * Pingüino: un pájaro que NO puede volar
 */
export class Penguin extends Bird {
  swim(): void {
    console.log("Swimming...");
  }
}