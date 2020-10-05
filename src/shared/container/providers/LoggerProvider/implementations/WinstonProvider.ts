import { createLogger, format, transports } from 'winston';

import ILoggerProvider from '../models/ILoggerProvider';

class WinstonProvider implements ILoggerProvider {
  public log(level: string, message: string): void {
    const logger = createLogger({
      level: 'info',
      format: format.combine(format.timestamp(), format.simple()),
      transports: [
        new transports.File({ filename: 'tmp/log/info.log', level: 'info' }),
        new transports.File({ filename: 'tmp/log/error.log', level: 'error' }),
        new transports.File({ filename: 'tmp/log/combined.log' }),
      ],
    });

    logger.log(level, message);
  }
}

export default WinstonProvider;
