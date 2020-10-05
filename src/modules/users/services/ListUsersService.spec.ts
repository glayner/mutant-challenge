import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ListUsersService from './ListUsersService';

let fakeUsersRepository: FakeUsersRepository;
let listUsersService: ListUsersService;

describe('listUsers', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    listUsersService = new ListUsersService(fakeUsersRepository);
  });
  it('should be able to list users', async () => {
    const today = new Date();
    const user = await fakeUsersRepository.create({
      name: 'João da Silva',
      username: 'joao',
      contact: {
        id: 1,
        email: 'joao@email.com',
        phone: '11999999999',
        website: 'joao.com.br',
        created_at: today,
        updated_at: today,
      },
      address: {
        id: 1,
        city: 'São Paulo',
        street: 'Rua Silvestre de Almeida Lopes',
        zipcode: '02943-030',
        suite: 'Suite 879',
        created_at: today,
        updated_at: today,
      },
    });

    const users = await listUsersService.execute();

    expect(users).toEqual(expect.arrayContaining([user]));
  });

  it('should be able to list empity array', async () => {
    const users = await listUsersService.execute();

    expect(users).toEqual([]);
  });
});
