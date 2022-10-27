import pino, { Logger } from 'pino';

import { LoggerInterface } from './logger.interface.js';

export default class LoggerService implements LoggerInterface {
  private logger!: Logger;

  constructor() {
    this.logger = pino();
  }

  public info(message: string, ...args: unknown[]) {
    this.logger.info(message, ...args);
  }

  public warn(message: string, ...args: unknown[]) {
    this.logger.warn(message, ...args);
  }

  public error(message: string, ...args: unknown[]) {
    this.logger.error(message, ...args);
  }

  public debug(message: string, ...args: unknown[]) {
    this.logger.debug(message, ...args);
  }
}
