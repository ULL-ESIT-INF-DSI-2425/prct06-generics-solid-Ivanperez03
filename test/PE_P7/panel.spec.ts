import { describe, expect, test } from "vitest";
import { Estacion } from "../../src/PE_P7/estacion.js";
import { Panel } from "../../src/PE_P7/panel.js";

describe("Test sobre el observador panel", () => {
    test("Inicializacion del panel", () => {
        const panel = new Panel("francia"); 
        expect(panel.modelo).toEqual("francia") ;
    }); 
    test("Funcion update", () => {
        const estacion = new Estacion(15, ["lluvia"]); 
        const panel = new Panel("francia"); 
        const panel2 = new Panel("alemania"); 
        estacion.agregar(panel); 
        estacion.agregar(panel2); 
        estacion.modificarTemperatura(30); 
        expect(panel.update(estacion)).toEqual(
        "Soy el panel de modelo francia e informo que la temperatura ha cambiado");
        estacion.modificarFenomenos(["sol","nubes"]);
        expect(panel2.update(estacion)).toEqual(
        "Soy el panel de modelo alemania e informo que los fenomenos han cambiado");
        });     
}); 