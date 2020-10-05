export default interface ILoggerProvider {
  log(level: string, message: string): void;
}
