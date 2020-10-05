import 'reflect-metadata';
import ILoggerProvider from '@shared/container/providers/LoggerProvider/models/ILoggerProvider';
import { inject, injectable } from 'tsyringe';

import IResultDTO from '../dtos/IResultDTO';
import IHttpRequestProvider from '../providers/HttpRequestProvider/models/IHttpRequestProvider';

@injectable()
class ListResultService {
  constructor(
    @inject('HttpRequestProvider')
    private httpRequestProvider: IHttpRequestProvider,

    @inject('LoggerProvider')
    private loggerProvider: ILoggerProvider,
  ) {}

  public async execute(): Promise<IResultDTO[]> {
    const result = (await this.httpRequestProvider.getUrl(
      'https://jsonplaceholder.typicode.com/users',
    )) as IResultDTO[];

    this.loggerProvider.log(
      'info',
      `https://jsonplaceholder.typicode.com/users retornou ${
        result.length
      } dados às ${new Date().toISOString()}`,
    );

    return result;
  }
}
export default ListResultService;
