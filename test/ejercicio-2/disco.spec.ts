import { describe, expect, test } from "vitest";
import { Cancion } from "../../src/ejercicio-2/cancion";
import { Disco } from "../../src/ejercicio-2/disco";

const canciones = [
  new Cancion("Thunderstruck", 292, ["Rock"], 5000000),
  new Cancion("Back in Black", 255, ["Rock"], 7000000),
];

const disco = new Disco("Back in Black", 1980, canciones);

describe("Disco Tests", () => {
  test("Debe almacenar correctamente los atributos", () => {
    expect(disco.nombre).toBe("Back in Black");
    expect(disco.anio).toBe(1980);
    expect(disco.canciones).toEqual(canciones);
  });

  test("Debe devolver el número total de canciones", () => {
    expect(disco.cancionesTotales()).toBe(2);
  });

  test("Debe devolver la duración total correctamente", () => {
    expect(disco.duracionTotal()).toBe(292 + 255);
  });

  test("Debe devolver el total de reproducciones correctamente", () => {
    expect(disco.reproduccionesTotales()).toBe(5000000 + 7000000);
  });

  test("Debe mostrar información correctamente", () => {
    expect(() => disco.showInfo()).not.toThrow();
  });
});
