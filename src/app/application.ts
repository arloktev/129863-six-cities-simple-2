import { LoggerInterface } from '../common/logger/logger.interface';
import { ConfigInterface } from '../common/config/config.interface';

export default class Application {
  private logger: LoggerInterface;
  private config: ConfigInterface;

  constructor(logger: LoggerInterface, config: ConfigInterface) {
    this.logger = logger;
    this.config = config;
  }

  public async init() {
    this.logger.info('Application initialization...');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }
}
