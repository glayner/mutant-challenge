import { Repository, getRepository } from 'typeorm';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '../entities/User';

class UsersRepository implements IUsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async listAll(): Promise<User[]> {
    const users = await this.ormRepository.find({
      relations: ['contact', 'address'],
    });

    return users;
  }

  public async create({
    name,
    username,
    address,
    contact,
  }: ICreateUserDTO): Promise<User> {
    const newUser = new User();
    Object.assign(newUser, {
      name,
      username,
      address,
      contact,
    });

    const user = this.ormRepository.create(newUser);

    await this.ormRepository.save(user);

    return user;
  }

  public async findByUsername(username: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { username },
      relations: ['contact', 'address'],
    });

    return user;
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user);

    return user;
  }
}
export default UsersRepository;
