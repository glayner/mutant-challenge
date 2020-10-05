import ILoggerProvider from '../models/ILoggerProvider';

class FakeLoggerProvider implements ILoggerProvider {
  public log(level: string, message: string): void {
    // eslint-disable-next-line no-console
    console.log(level, message);
  }
}

export default FakeLoggerProvider;
