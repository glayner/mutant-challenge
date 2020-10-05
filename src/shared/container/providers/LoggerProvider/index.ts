import { container } from 'tsyringe';

import WinstonProvider from './implementations/WinstonProvider';
import ILoggerProvider from './models/ILoggerProvider';

container.registerSingleton<ILoggerProvider>('LoggerProvider', WinstonProvider);
