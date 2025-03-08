import { describe, expect, test } from "vitest";
import { Cancion } from "../../src/ejercicio-2/cancion";
import { Single } from "../../src/ejercicio-2/single";

const cancion = new Cancion("Highway to Hell", 208, ["Rock"], 8000000);
const single = new Single("Highway to Hell", 1979, cancion);

describe("Single Tests", () => {
  test("Debe almacenar correctamente los atributos", () => {
    expect(single.nombre).toBe("Highway to Hell");
    expect(single.anio).toBe(1979);
    expect(single.cancion).toBe(cancion);
  });

  test("Debe devolver la duración correctamente", () => {
    expect(single.duracionTotal()).toBe(208);
  });

  test("Debe devolver las reproducciones correctamente", () => {
    expect(single.reproduccionesTotales()).toBe(8000000);
  });

  test("Debe mostrar información correctamente", () => {
    expect(() => single.showInfo()).not.toThrow();
  });
});
