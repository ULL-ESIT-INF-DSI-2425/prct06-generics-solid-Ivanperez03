import { describe, expect, test } from "vitest";
import { MovieCollection } from "../../src/ejercicio-1/movies";

const movieCollection = new MovieCollection([
  { name: "Inception", gender: "Sci-Fi", duration: 148, actor: "Leonardo DiCaprio" },
  { name: "The Matrix", gender: "Sci-Fi", duration: 136, actor: "Keanu Reeves" },
  { name: "Titanic", gender: "Romance", duration: 195, actor: "Leonardo DiCaprio" },
]);

describe("MovieCollection Tests", () => {
  test("searchByName('Inception') returns correct movie", () => {
    expect(movieCollection.searchByName("Inception")).toEqual([
      { name: "Inception", gender: "Sci-Fi", duration: 148, actor: "Leonardo DiCaprio" },
    ]);
  });

  test("searchByGender('Sci-Fi') returns correct movies", () => {
    expect(movieCollection.searchByGender("Sci-Fi")).toEqual([
      { name: "Inception", gender: "Sci-Fi", duration: 148, actor: "Leonardo DiCaprio" },
      { name: "The Matrix", gender: "Sci-Fi", duration: 136, actor: "Keanu Reeves" },
    ]);
  });

  test("searchByDuration(195) returns correct movie", () => {
    expect(movieCollection.searchByDuration(195)).toEqual([
      { name: "Titanic", gender: "Romance", duration: 195, actor: "Leonardo DiCaprio" },
    ]);
  });

  test("searchByActor('Leonardo DiCaprio') returns correct movies", () => {
    expect(movieCollection.searchByActor("Leonardo DiCaprio")).toEqual([
      { name: "Inception", gender: "Sci-Fi", duration: 148, actor: "Leonardo DiCaprio" },
      { name: "Titanic", gender: "Romance", duration: 195, actor: "Leonardo DiCaprio" },
    ]);
  });

  test("searchByActor('Unknown Actor') returns empty array", () => {
    expect(movieCollection.searchByActor("Unknown Actor")).toEqual([]);
  });
});
