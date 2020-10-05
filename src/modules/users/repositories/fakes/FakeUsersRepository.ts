import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '@modules/users/infra/typeorm/entities/User';

import IUsersRepository from '../IUsersRepository';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async listAll(): Promise<User[]> {
    return this.users;
  }

  public async create({
    name,
    username,
    address,
    contact,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, {
      id: this.users.length + 1,
      name,
      username,
      address,
      contact,
      create_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    this.users.push(user);

    return user;
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    const user = this.users.find(userFind => userFind.username === username);

    return user;
  }

  public async save(user: User): Promise<User> {
    const userIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[userIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
