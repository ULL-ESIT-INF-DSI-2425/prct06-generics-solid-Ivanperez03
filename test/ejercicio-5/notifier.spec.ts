import { describe, expect, test } from "vitest";
import { EmailService,ShortMessageService,Notifier } from "../../src/ejercicio-5/notifier";

describe("EmailService Tests", () => {
  test("Debe enviar notificación por email correctamente", () => {
    const emailService = new EmailService();

    // Capturamos la salida de consola
    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => consoleOutput.push(message);

    emailService.notify("Hello via Email!");

    expect(consoleOutput).toContain("📧 Sending notification by email: Hello via Email!");

    // Restauramos console.log
    console.log = originalLog;
  });
});

describe("ShortMessageService Tests", () => {
  test("Debe enviar notificación por SMS correctamente", () => {
    const smsService = new ShortMessageService();

    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => consoleOutput.push(message);

    smsService.notify("Hello via SMS!");

    expect(consoleOutput).toContain("📱 Sending notification by SMS: Hello via SMS!");

    console.log = originalLog;
  });
});

describe("Notifier Tests", () => {
  test("Debe enviar notificación utilizando EmailService", () => {
    const emailService = new EmailService();
    const notifier = new Notifier(emailService);

    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => consoleOutput.push(message);

    notifier.sendNotification("Notification via Email");

    expect(consoleOutput).toContain("📧 Sending notification by email: Notification via Email");

    console.log = originalLog;
  });

  test("Debe enviar notificación utilizando ShortMessageService", () => {
    const smsService = new ShortMessageService();
    const notifier = new Notifier(smsService);

    const consoleOutput: string[] = [];
    const originalLog = console.log;
    console.log = (message: string) => consoleOutput.push(message);

    notifier.sendNotification("Notification via SMS");

    expect(consoleOutput).toContain("📱 Sending notification by SMS: Notification via SMS");

    console.log = originalLog;
  });
});
