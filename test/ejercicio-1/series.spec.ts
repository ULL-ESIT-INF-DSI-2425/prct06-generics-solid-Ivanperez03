import { describe, expect, test } from "vitest";
import { SeriesCollection } from "../../src/ejercicio-1/series";

const seriesCollection = new SeriesCollection([
  { name: "Breaking Bad", gender: "Crime", duration: 50, seasons: 5 },
  { name: "Friends", gender: "Comedy", duration: 25, seasons: 10 },
  { name: "Stranger Things", gender: "Sci-Fi", duration: 50, seasons: 4 },
]);

describe("SeriesCollection Tests", () => {
  test("searchByName('Breaking Bad') returns correct series", () => {
    expect(seriesCollection.searchByName("Breaking Bad")).toEqual([
      { name: "Breaking Bad", gender: "Crime", duration: 50, seasons: 5 },
    ]);
  });

  test("searchByGender('Sci-Fi') returns correct series", () => {
    expect(seriesCollection.searchByGender("Sci-Fi")).toEqual([
      { name: "Stranger Things", gender: "Sci-Fi", duration: 50, seasons: 4 },
    ]);
  });

  test("searchByDuration(50) returns correct series", () => {
    expect(seriesCollection.searchByDuration(50)).toEqual([
      { name: "Breaking Bad", gender: "Crime", duration: 50, seasons: 5 },
      { name: "Stranger Things", gender: "Sci-Fi", duration: 50, seasons: 4 },
    ]);
  });

  test("searchBySeasons(5) returns correct series", () => {
    expect(seriesCollection.searchBySeasons(5)).toEqual([
      { name: "Breaking Bad", gender: "Crime", duration: 50, seasons: 5 },
    ]);
  });

  test("searchBySeasons(1) returns empty array", () => {
    expect(seriesCollection.searchBySeasons(1)).toEqual([]);
  });
});
