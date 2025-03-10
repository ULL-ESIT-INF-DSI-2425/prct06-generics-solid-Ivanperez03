import { describe, test, expect } from 'vitest';
import { List } from "../../src/PE_ejercicios/lista";

describe('appendMethod', () => {
  test('create an empty list', () => {
    const list = new List<any>();
    expect(list['items']).toEqual([]);
  });

  test('appends elements to a non-empty list', () => {
    const list1 = new List<any>(['a', 'b']);
    list1.appendMethod([1, 2]);
    expect(list1['items']).toEqual(['a', 'b', 1, 2]);
  });
});

describe('concatenateMethod', () => {
  test('concatenate multiple lists', () => {
    const list1 = new List<any>(["a", "b"]);
    const list2 = new List<any>([1, 2]);
    const list3 = new List<any>(["c", 3]);
    list1.appendMethod([list2, list3]);
    const result = list1.concatenateMethod();
    expect(result['items']).toEqual(["a", "b", 1, 2, "c", 3]);
  });
});

describe('filterMethod', () => {
  test('filter even numbers', () => {
    const list = new List<number>([1, 2, 3, 4, 5, 6]);
    const result = list.filterMethod((num) => num % 2 !== 0);
    expect(result['items']).toEqual([1, 3, 5]);
  });

  test('nothing to filter', () => {
    const list = new List<string>(['aa', 'bb', 'cc']);
    const result = list.filterMethod((item) => item === 'a');
    expect(result['items']).toEqual([]);
  });

  test('filter all elements', () => {
    const list = new List<number>([4, 16, 64]);
    const result = list.filterMethod((item) => item % 4 === 0);
    expect(result['items']).toEqual([4, 16, 64]);
  });
});

describe('lengthMethod', () => {
  test('length of an empty list', () => {
    const list = new List<any>();
    const result = list.lengthMethod();
    expect(result).toEqual(0);
  });

  test('length of a list with 10 elements', () => {
    const list = new List<number>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const result = list.lengthMethod();
    expect(result).toEqual(10);
  });

  test('length after appending elements', () => {
    const list = new List<string>(['a', 'b', 'c']);
    const result = list.lengthMethod();
    expect(result).toEqual(3);
  });
});
