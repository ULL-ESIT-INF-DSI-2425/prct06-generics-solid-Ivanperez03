import { describe, expect, test } from "vitest";
import { DocumentaryCollection } from "../../src/ejercicio-1/documentaries";

const documentaryCollection = new DocumentaryCollection([
  { name: "Planet Earth", gender: "Nature", duration: 50, vocal: "David Attenborough" },
  { name: "Cosmos", gender: "Science", duration: 60, vocal: "Neil deGrasse Tyson" },
  { name: "Inside Job", gender: "Finance", duration: 105 },
]);

describe("DocumentaryCollection Tests", () => {
  // ✅ Pruebas de la clase base (BasicStreamableCollection)
  test("searchByName('Cosmos') returns correct documentary", () => {
    expect(documentaryCollection.searchByName("Cosmos")).toEqual([
      { name: "Cosmos", gender: "Science", duration: 60, vocal: "Neil deGrasse Tyson" },
    ]);
  });

  test("searchByGender('Nature') returns correct documentary", () => {
    expect(documentaryCollection.searchByGender("Nature")).toEqual([
      { name: "Planet Earth", gender: "Nature", duration: 50, vocal: "David Attenborough" },
    ]);
  });

  test("searchByDuration(105) returns correct documentary", () => {
    expect(documentaryCollection.searchByDuration(105)).toEqual([
      { name: "Inside Job", gender: "Finance", duration: 105 },
    ]);
  });

  test("searchByVocal('David Attenborough') returns correct documentary", () => {
    expect(documentaryCollection.searchByVocal("David Attenborough")).toEqual([
      { name: "Planet Earth", gender: "Nature", duration: 50, vocal: "David Attenborough" },
    ]);
  });

  test("searchByVocal('Unknown') returns empty array", () => {
    expect(documentaryCollection.searchByVocal("Unknown")).toEqual([]);
  });
});
