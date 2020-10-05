import FakeLoggerProvider from '@shared/container/providers/LoggerProvider/fakes/FakeLoggerProvider';
import FakeHttpRequestProvider from '../providers/HttpRequestProvider/fakes/FakeHttpRequestProvider';
import ListResultService from './ListResultService';

let fakeHttpRequestProvider: FakeHttpRequestProvider;
let fakeLoggerProvider: FakeLoggerProvider;
let listResultService: ListResultService;

describe('listResult', () => {
  beforeEach(() => {
    fakeHttpRequestProvider = new FakeHttpRequestProvider();
    fakeLoggerProvider = new FakeLoggerProvider();

    listResultService = new ListResultService(
      fakeHttpRequestProvider,
      fakeLoggerProvider,
    );
  });
  it('should be able to list result', async () => {
    const getUrl = jest.spyOn(fakeHttpRequestProvider, 'getUrl');

    await listResultService.execute();

    expect(getUrl).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );
  });
});
