import { container } from 'tsyringe';

import AxiosProvider from './implementations/AxiosProvider';
import IHttpRequestProvider from './models/IHttpRequestProvider';

container.registerSingleton<IHttpRequestProvider>(
  'HttpRequestProvider',
  AxiosProvider,
);
