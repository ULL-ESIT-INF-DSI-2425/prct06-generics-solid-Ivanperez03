import { describe, expect, test, vi } from "vitest";
import { Printer,Scanner,PrinterScanner } from "../../src/ejercicio-4/interfaces";

describe("Printer Tests", () => {
  test("Debe imprimir correctamente", () => {
    const printer = new Printer();
    const consoleSpy = vi.spyOn(console, "log");

    printer.print();

    expect(consoleSpy).toHaveBeenCalledWith("Printing...");
    consoleSpy.mockRestore();
  });
});

describe("Scanner Tests", () => {
  test("Debe escanear correctamente", () => {
    const scanner = new Scanner();
    const consoleSpy = vi.spyOn(console, "log");

    scanner.scan();

    expect(consoleSpy).toHaveBeenCalledWith("Scanning...");
    consoleSpy.mockRestore();
  });
});

describe("PrinterScanner Tests", () => {
  test("Debe imprimir correctamente", () => {
    const printerScanner = new PrinterScanner();
    const consoleSpy = vi.spyOn(console, "log");

    printerScanner.print();

    expect(consoleSpy).toHaveBeenCalledWith("Printing...");
    consoleSpy.mockRestore();
  });

  test("Debe escanear correctamente", () => {
    const printerScanner = new PrinterScanner();
    const consoleSpy = vi.spyOn(console, "log");

    printerScanner.scan();

    expect(consoleSpy).toHaveBeenCalledWith("Scanning...");
    consoleSpy.mockRestore();
  });
});
