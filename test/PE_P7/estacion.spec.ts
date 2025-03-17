import { describe, expect, test } from "vitest";
import { Estacion, AvisoCambioEstacion } from "../../src/PE_P7/estacion.js";
import { Movil } from "../../src/PE_P7/movil.js";

describe("Tests sobre la estacion meteorologica", () => {
    test("Inicializacion", () => {
        const estacion = new Estacion(20, ["soleado", "poco nublado"]);
        expect(estacion.estacionCambio).toEqual(AvisoCambioEstacion.SinCambio); 
        expect(estacion.temperatura).toEqual(20); 
        expect(estacion.fenomenos).toContain("soleado"); 
        estacion.modificarTemperatura(30); 
        expect(estacion.temperatura).toEqual(30); 
        estacion.modificarFenomenos(["truenos", "rayos"]); 
        expect(estacion.fenomenos).toEqual(["truenos", "rayos"]); 
    }); 
    test ("Observadores", () => {
        const movil = new Movil("Nokia","679666666"); 
        const estacion = new Estacion(20, ["soleado", "poco nublado"]);
        estacion.agregar(movil); 
        expect(estacion.observers.includes(movil));
        expect(() => {estacion.agregar(movil)}).toThrowError("El observador ya ha sido agregado");        estacion.quitar(movil); 
        expect(estacion.observers).toEqual([]);
        expect(() => {estacion.quitar(movil)}).toThrowError("El observador no ha sido agregado"); 
    }); 
}); 