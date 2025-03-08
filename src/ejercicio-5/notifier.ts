/**
 * Interfaz que representa cualquier servicio de notificación
 * Permite el principio de Open Close, pues ahora podremos usar interfaz para nuevas implementaciones
 * Asi cumplimos DIP (que era el principio que se estaba violando), cumpliendo abstraccion
 */
export interface NotificationService {
  notify(message: string): void;
}

/**
 * Servicio de notificaciones por email
 */
export class EmailService implements NotificationService {
  notify(message: string): void {
    console.log(`📧 Sending notification by email: ${message}`);
  }
}

/**
 * Servicio de notificaciones por SMS
 */
export class ShortMessageService implements NotificationService {
  notify(message: string): void {
    console.log(`📱 Sending notification by SMS: ${message}`);
  }
}

/**
 * Clase que envía notificaciones utilizando un servicio de notificación
 * Ahora Notifier esta acoplado a la interfaz generica, no depende de las otras clases
 */
export class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}