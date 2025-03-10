/**
 * Clase para funciones de listas
 */
export class List<T> {
	/**
	 * Privado
	 */
  private items: T[];

	/**
	 * Constructor
	 */
  constructor(initialItems: T[] = []) {
    this.items = initialItems;
  }

  /**
   * Método para añadir elementos al final de la lista
   * @param list2 - Lista a la cual juntar
   */
  appendMethod(list2: T[]): void {
    for (const element of list2) {
      this.items[this.lengthMethod()] = element;  
    }
  }

  /**
   * Método para concatenar varias listas
   * @returns Nueva lista concatenada
   */
  concatenateMethod(): List<T> {
    let result = new List<T>(this.items);
    for (const element of this.items) {
			result.appendMethod(element)
		}
    return result;
  }

  /**
   * Método para filtrar elementos de la lista según un predicado
   * @param predicate - predicado lógico
   * @returns Nueva lista con los elementos que cumplen el predicado
   */
  filterMethod(predicate: (item: T) => boolean): List<T> {
    let result = new List<T>();
    for (let element of this.items) {
      if (predicate(element)) {
        result.appendMethod([element]);  
      }
    }
    return result;
  }

  /**
   * Método para obtener la longitud de la lista
   * @returns Número de elementos en la lista
   */
  lengthMethod(): number {
    let final = 0;
    for (let element of this.items) {
      ++final;
    }
    return final;
  }
}
