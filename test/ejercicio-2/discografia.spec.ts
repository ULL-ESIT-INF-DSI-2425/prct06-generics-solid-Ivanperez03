import { describe, expect, test } from "vitest";
import { Disco } from "../../src/ejercicio-2/disco";
import { Single } from "../../src/ejercicio-2/single";
import { Cancion } from "../../src/ejercicio-2/cancion";
import { Discografia } from "../../src/ejercicio-2/discografia";

const canciones = [new Cancion("Thunderstruck", 292, ["Rock"], 5000000)];
const disco = new Disco("Back in Black", 1980, canciones);
const single = new Single("Highway to Hell", 1979, canciones[0]);

const discografia = new Discografia("AC/DC", [disco, single]);

describe("Discografia Tests", () => {
  test("Debe almacenar correctamente los elementos", () => {
    expect(discografia.nombre).toBe("AC/DC");
    expect(discografia.coleccion).toEqual([disco, single]);
  });

  test("Debe devolver el número total de elementos", () => {
    expect(discografia.totalElementos()).toBe(2);
  });

  test("Debe mostrar información correctamente", () => {
    expect(() => discografia.showInfo()).not.toThrow();
  });
});
