import FakeAdressesRepository from '@modules/users/repositories/fakes/FakeAdressesRepository';
import FakeContactsRepository from '@modules/users/repositories/fakes/FakeContactsRepository';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeLoggerProvider from '@shared/container/providers/LoggerProvider/fakes/FakeLoggerProvider';
import FakeHttpRequestProvider from '../providers/HttpRequestProvider/fakes/FakeHttpRequestProvider';
import SaveResultService from './SaveResultService';

let fakeHttpRequestProvider: FakeHttpRequestProvider;
let fakeAdressesRepository: FakeAdressesRepository;
let fakeContactsRepository: FakeContactsRepository;
let fakeUsersRepository: FakeUsersRepository;
let fakeLoggerProvider: FakeLoggerProvider;
let saveResultService: SaveResultService;

describe('saveResult', () => {
  beforeEach(() => {
    fakeHttpRequestProvider = new FakeHttpRequestProvider();
    fakeAdressesRepository = new FakeAdressesRepository();
    fakeContactsRepository = new FakeContactsRepository();
    fakeUsersRepository = new FakeUsersRepository();
    fakeLoggerProvider = new FakeLoggerProvider();

    saveResultService = new SaveResultService(
      fakeHttpRequestProvider,
      fakeUsersRepository,
      fakeAdressesRepository,
      fakeContactsRepository,
      fakeLoggerProvider,
    );
  });
  it('should be able to register result', async () => {
    const getUrl = jest.spyOn(fakeHttpRequestProvider, 'getUrl');

    await saveResultService.execute({ notRepeat: false });

    const users = await fakeUsersRepository.listAll();

    expect(getUrl).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );

    expect(users[0]).toHaveProperty('id');
  });
});
