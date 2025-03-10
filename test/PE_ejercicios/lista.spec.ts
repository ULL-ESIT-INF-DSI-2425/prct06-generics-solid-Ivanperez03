import { describe, test, expect } from 'vitest';
import { List } from "../../src/PE_ejercicios/lista";

describe('append method', () => {
	test('create an empty list', () => {
    const list = new List();
    expect(list['items']).toEqual([]);  
  });

  test('appends elements to a empty list', () => {
    const list1 = new List();
    list1.appendMethod(['a', 'b']);
    expect(list1['items']).toEqual(['a', 'b']);
  });

  test('append two lists', () => {
    const list1 = new List();
    list1.appendMethod(['a', 'b']);
    list1.appendMethod(['&', 3]);
    expect(list1['items']).toEqual(['a', 'b', '&', 3]);
  });
});

describe('concatenate method', () => {
  test('concatenate lists', () => {
    const list1 = new List();
    const result = list1.concatenateMethod([["a", "b"], ["c", 5]]);
    expect(result).toEqual(["a", "b", "c", 5]);
  });

  test('concatenate empty lists', () => {
    const list1 = new List(); 
    const result = list1.concatenateMethod([]); 
    expect(result).toEqual([]); 
  });
});

describe('concatenate method', () => {
  test('concatenate lists', () => {
    const list1 = new List();
    const result = list1.concatenateMethod([["a", "b"], ["c", 5]]);
    expect(result).toEqual(["a", "b", "c", 5]);
  });

  test('concatenate empty lists', () => {
    const list1 = new List(); 
    const result = list1.concatenateMethod([]); 
    expect(result).toEqual([]); 
  });
});


describe('filter method', () => {
  test('filter even numbers', () => {
    const list = new List();
    const numbers = [1, 2, 3, 4, 5, 6];
    const result = list.filterMethod(numbers, (num) => num % 2 !== 0);
    expect(result).toEqual([1, 3, 5]);
  });

  test('nothing to be filter', () => {
    const list = new List();
    const example = ['aa',2,'5','o'];
    const result = list.filterMethod(example, (item) => item == 'a');
    expect(result).toEqual([]);
  });

  test('filter all', () => {
    const list = new List();
    const example = [4,16,64];
    const result = list.filterMethod(example, (item) => item % 4 === 0);
    expect(result).toEqual([4,16,64]);
  });
}); 


describe('lenght method', () => {
  test('lenght 0', () => {
    const list = new List();
    const test = [];
    const result = list.lengthMethod(test); 
    expect(result).toEqual(0);
  });

  test('lenght 10', () => {
    const list = new List();
    const test = [0,1,2,3,4,5,6,7,8,9];
    const result = list.lengthMethod(test);
    expect(result).toEqual(10);
  });
}); 