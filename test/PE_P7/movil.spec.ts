import { describe, expect, test } from "vitest";
import { Estacion } from "../../src/PE_P7/estacion.js";
import { Movil } from "../../src/PE_P7/movil.js";

describe("Test sobre el observador movil", () => {
    test("Inicializacion del movil", () => {
        const movil = new Movil("iPhone", "223"); 
        expect(movil.numero).toEqual("223") ;
        expect(movil.marca).toEqual("iPhone") ;
    }); 
    test("Funcion update", () => {
        const estacion = new Estacion(15, ["lluvia"]); 
        const movil = new Movil("iPhone", "223"); 
        const movil2 = new Movil("Samsung", "4235"); 
        estacion.agregar(movil); 
        estacion.agregar(movil2); 
        estacion.modificarTemperatura(30); 
        expect(movil.update(estacion)).toEqual(
        "Soy el movil con numero 223 y marca iPhone e informo que he recibido una notificacion de que la temperatura ha cambiado");
        estacion.modificarFenomenos(["sol","nubes"]);
        expect(movil2.update(estacion)).toEqual(
        "Soy el movil con numero 4235 y marca Samsung e informo que he recibido una notificacion de que los fenomenos meteorologicos han cambiado");    
    });     
}); 