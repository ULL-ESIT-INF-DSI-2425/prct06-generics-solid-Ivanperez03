import { describe, expect, test, beforeEach, afterEach } from "vitest";
import { LocalFileHelper } from "../../src/ejercicio-3/filehelper";
import { FileManager } from "../../src/ejercicio-3/filemanager";
import * as fs from "fs";

// Archivo de prueba temporal
const testFilePath = "testfile.txt";

describe("FileManager Tests", () => {
  let fileHelper: LocalFileHelper;
  let fileManager: FileManager;

  beforeEach(() => {
    fileHelper = new LocalFileHelper(testFilePath);
    fileManager = new FileManager(fileHelper);
    fs.writeFileSync(testFilePath, "Initial content");
  });

  afterEach(() => {
    if (fs.existsSync(testFilePath)) {
      fs.unlinkSync(testFilePath);
    }
  });

  test("Debe leer correctamente un archivo utilizando FileManager", () => {
    const content = fileManager.readFile();
    expect(content).toBe("Initial content");
  });

  test("Debe escribir correctamente en un archivo utilizando FileManager", () => {
    fileManager.writeFile("Updated content");
    const content = fs.readFileSync(testFilePath, "utf-8");
    expect(content).toBe("Updated content");
  });

  test("Debe manejar errores al leer un archivo inexistente", () => {
    fs.unlinkSync(testFilePath);

    // Capturar salida de consola
    const consoleSpy = [] as string[];
    const originalConsoleError = console.error;
    console.error = (msg: string) => consoleSpy.push(msg);

    const result = fileManager.readFile();

    expect(result).toBe("");
    expect(consoleSpy.length).toBeGreaterThan(0);
    expect(consoleSpy).toContainEqual(expect.stringMatching(/Error/));

    console.error = originalConsoleError;
  });

  test("Debe manejar errores al escribir en un archivo protegido", () => {
    fs.chmodSync(testFilePath, 0o444); // Solo lectura

    const consoleSpy = [] as string[];
    const originalConsoleError = console.error;
    console.error = (msg: string) => consoleSpy.push(msg);

    fileManager.writeFile("This should fail");

    expect(consoleSpy.length).toBeGreaterThan(0);
    expect(consoleSpy).toContainEqual(expect.stringMatching(/Error/));

    fs.chmodSync(testFilePath, 0o644); // Restaurar permisos
    console.error = originalConsoleError;
  });

  test("Debe manejar errores desconocidos en readFile", () => {
    // Mock del método `read` para lanzar un error no estándar
    fileHelper.read = () => {
      throw "Unexpected error"; // No es un `Error`
    };

    const consoleSpy = [] as string[];
    const originalConsoleError = console.error;
    console.error = (msg: string) => consoleSpy.push(msg);

    const result = fileManager.readFile();

    expect(result).toBe("");
    expect(consoleSpy).toContain("Unknown error occurred");

    console.error = originalConsoleError;
  });

  test("Debe manejar errores desconocidos en writeFile", () => {
    // Mock del método `write` para lanzar un error no estándar
    fileHelper.write = () => {
      throw 123; // Error no estándar
    };

    const consoleSpy = [] as string[];
    const originalConsoleError = console.error;
    console.error = (msg: string) => consoleSpy.push(msg);

    fileManager.writeFile("Some content");

    expect(consoleSpy).toContain("Unknown error occurred");

    console.error = originalConsoleError;
  });
});