import { describe, expect, test } from "vitest";
import { Biblioteca } from "../../src/ejercicio-2/biblioteca";
import { Artista } from "../../src/ejercicio-2/artista";
import { Discografia } from "../../src/ejercicio-2/discografia";
import { Disco } from "../../src/ejercicio-2/disco";
import { Cancion } from "../../src/ejercicio-2/cancion";

const canciones = [new Cancion("Thunderstruck", 292, ["Rock"], 5000000)];
const disco = new Disco("Back in Black", 1980, canciones);
const discografia = new Discografia("AC/DC", [disco]);
const artista = new Artista("AC/DC", 10000000, discografia);
const biblioteca = new Biblioteca();

describe("Biblioteca Tests", () => {
  test("Debe agregar artistas correctamente", () => {
    biblioteca.addArtista(artista);
    expect(biblioteca.buscarArtista("AC/DC")).toEqual([artista]);
  });

  test("Debe buscar artistas correctamente", () => {
    expect(biblioteca.buscarArtista("AC/DC")).toEqual([artista]);
  });

  test("Debe retornar un array vacío si el artista no existe", () => {
    expect(biblioteca.buscarArtista("Queen")).toEqual([]);
  });

  test("Debe mostrar información correctamente", () => {
    expect(() => biblioteca.mostrarBiblioteca()).not.toThrow();
  });
});
