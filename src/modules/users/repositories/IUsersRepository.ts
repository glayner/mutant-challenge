import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User';

export default interface IUsersRepository {
  listAll(): Promise<User[]>;
  create(data: ICreateUserDTO): Promise<User>;
  findByUsername(username: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
}
