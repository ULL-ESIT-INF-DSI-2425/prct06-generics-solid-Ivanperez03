import { describe, expect, test } from "vitest";
import { Cancion } from "../../src/ejercicio-2/cancion";

const cancion = new Cancion("Thunderstruck", 292, ["Rock"], 5000000);

describe("Cancion Tests", () => {
  test("Debe almacenar correctamente los atributos", () => {
    expect(cancion.nombre).toBe("Thunderstruck");
    expect(cancion.duracion).toBe(292);
    expect(cancion.generos).toEqual(["Rock"]);
    expect(cancion.reproducciones).toBe(5000000);
  });

  test("Debe mostrar información correctamente", () => {
    expect(() => cancion.informacion()).not.toThrow();
  });
});
