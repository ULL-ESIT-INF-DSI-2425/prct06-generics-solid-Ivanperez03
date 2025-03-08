import { describe, expect, test } from "vitest";
import { Bird,Sparrow,Penguin } from "../../src/ejercicio-6/bird";

describe("Bird Tests", () => {
  test("Debe poder comer", () => {
    const bird = new Bird();

    // Capturamos la salida de consola
    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => consoleOutput.push(message);

    bird.eat();

    expect(consoleOutput).toContain("Eating...");

    // Restauramos console.log
    console.log = originalLog;
  });
});

describe("Sparrow Tests", () => {
  test("Debe poder comer", () => {
    const sparrow = new Sparrow();

    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => consoleOutput.push(message);

    sparrow.eat();

    expect(consoleOutput).toContain("Eating...");

    console.log = originalLog;
  });

  test("Debe poder volar", () => {
    const sparrow = new Sparrow();

    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => consoleOutput.push(message);

    sparrow.fly();

    expect(consoleOutput).toContain("Flying...");

    console.log = originalLog;
  });
});

describe("Penguin Tests", () => {
  test("Debe poder comer", () => {
    const penguin = new Penguin();

    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => consoleOutput.push(message);

    penguin.eat();

    expect(consoleOutput).toContain("Eating...");

    console.log = originalLog;
  });

  test("Debe poder nadar", () => {
    const penguin = new Penguin();

    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => consoleOutput.push(message);

    penguin.swim();

    expect(consoleOutput).toContain("Swimming...");

    console.log = originalLog;
  });
});
