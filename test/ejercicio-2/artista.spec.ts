import { describe, expect, test } from "vitest";
import { Artista } from "../../src/ejercicio-2/artista";
import { Discografia } from "../../src/ejercicio-2/discografia";
import { Disco } from "../../src/ejercicio-2/disco";
import { Single } from "../../src/ejercicio-2/single";
import { Cancion } from "../../src/ejercicio-2/cancion";

const canciones = [new Cancion("Thunderstruck", 292, ["Rock"], 5000000)];
const disco = new Disco("Back in Black", 1980, canciones);
const single = new Single("Highway to Hell", 1979, canciones[0]);

const discografia = new Discografia("AC/DC", [disco, single]);
const artista = new Artista("AC/DC", 10000000, discografia);

describe("Artista Tests", () => {
  test("Debe almacenar correctamente los atributos", () => {
    expect(artista.nombre).toBe("AC/DC");
    expect(artista.oyentes).toBe(10000000);
    expect(artista.discografia).toBe(discografia);
  });

  test("Debe mostrar información correctamente", () => {
    expect(() => artista.Informacion()).not.toThrow();
  });
});
