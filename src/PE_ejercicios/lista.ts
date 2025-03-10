/**
 * Clase generica para operaciones entre listas 
 */
export class List<T> {
	/**
	 * listas privadas
	 */
  private items: T[];

	/**
	 * constructor de la clase Lista
	 */
  constructor() {
    this.items = [];
  }

	/**
	 * 
	 * @param list2 - lista a la cual concatenar con la que llama a la funcion
	 */
  appendMethod(list2: T[]): void {
    for (let element of list2) {
      this.items[this.items.length] = element;
    }
  }

	/**
	 * 
	 * @param lists - listas para ser concatenadas con la que llama a la funcion
	 * @returns - lista con todos los elementos concatenados
	 */
  concatenateMethod<T>(lists: T[][]): T[] {
    let result: T[] = [];
		lists.forEach((list) => {
			for (let element of list) {
				result[result.length] = element;
			}
		}); 
    return result;
  }

	/**
	 * 
	 * @param list - lista a la cual hacer el filtro
	 * @param predicate - predicado logico
	 * @returns - lista de elementos que cumplen el predicado
	 */
  filterMethod<T>(list: T[], predicate: (item: T) => boolean): T[] {
    let result: T[] = [];
    for (let element of list) {
      if (predicate(element)) {
        result[result.length] = element;
      }
    }
    return result;
  }
	
	/**
	 * @param list - lista a la cual sacar la longitud
	 * @returns - numero de longitud
	 */
	lengthMethod<T>(list: T[]): number {
		let final = 0; 
		for (let element of list) {
			++final
		}
		return final; 
	}
}
