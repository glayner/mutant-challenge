import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IAdressesRepository from '@modules/users/repositories/IAdressesRepository';
import IContactsRepository from '@modules/users/repositories/IContactsRepository';
import ILoggerProvider from '@shared/container/providers/LoggerProvider/models/ILoggerProvider';
import IResultDTO from '../dtos/IResultDTO';
import IHttpRequestProvider from '../providers/HttpRequestProvider/models/IHttpRequestProvider';

interface IRequest {
  notRepeat: boolean;
}

@injectable()
class SaveResultService {
  constructor(
    @inject('HttpRequestProvider')
    private httpRequestProvider: IHttpRequestProvider,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('AdressesRepository')
    private adressesRepository: IAdressesRepository,

    @inject('ContactsRepository')
    private contactsRepository: IContactsRepository,

    @inject('LoggerProvider')
    private loggerProvider: ILoggerProvider,
  ) {}

  public async execute({ notRepeat }: IRequest): Promise<User[]> {
    const resultPlaceHolder = (await this.httpRequestProvider.getUrl(
      'https://jsonplaceholder.typicode.com/users',
    )) as IResultDTO[];

    this.loggerProvider.log(
      'info',
      `https://jsonplaceholder.typicode.com/users retornou ${
        resultPlaceHolder.length
      } dados às ${new Date().toISOString()} para criar usuário`,
    );

    const usersInSuite: User[] = [];

    const promisePlaceHolder = resultPlaceHolder.map(async result => {
      if (result.address.suite.includes('Suite')) {
        this.loggerProvider.log(
          'info',
          `usuário ${result.username} está em suite`,
        );
        let hasUser: User | undefined;

        if (notRepeat)
          hasUser = await this.usersRepository.findByUsername(result.username);

        if (hasUser) {
          this.loggerProvider.log(
            'info',
            `usuário ${result.username} já está registrado`,
          );

          let changeUser = false;
          if (hasUser.address.zipcode !== result.address.zipcode) {
            const address = await this.adressesRepository.create({
              city: result.address.city,
              street: result.address.street,
              suite: result.address.suite,
              zipcode: result.address.zipcode,
            });

            this.loggerProvider.log(
              'info',
              `usuário ${result.username} recebeu novo endereço com id ${address.id}`,
            );

            hasUser.address = address;

            changeUser = true;
          }

          if (hasUser.contact.email !== result.email) {
            const contact = await this.contactsRepository.create({
              email: result.email,
              phone: result.phone,
              website: result.website,
            });

            this.loggerProvider.log(
              'info',
              `usuário ${result.username} recebeu novo contato  com id ${contact.id}`,
            );

            hasUser.contact = contact;

            changeUser = true;
          }

          if (changeUser) {
            await this.usersRepository.save(hasUser);
            usersInSuite.push(hasUser);
          }
        } else {
          const address = await this.adressesRepository.create({
            city: result.address.city,
            street: result.address.street,
            suite: result.address.suite,
            zipcode: result.address.zipcode,
          });

          this.loggerProvider.log(
            'info',
            `foi registrado o endereço do usuário ${result.username} com id ${address.id}`,
          );

          const contact = await this.contactsRepository.create({
            email: result.email,
            phone: result.phone,
            website: result.website,
          });

          this.loggerProvider.log(
            'info',
            `foi registrado o contato do usuário ${result.username} com id ${contact.id}`,
          );

          const user = await this.usersRepository.create({
            name: result.name,
            username: result.username,
            contact,
            address,
          });

          this.loggerProvider.log(
            'info',
            `foi registrado o usuário ${result.username} com id ${user.id}`,
          );

          usersInSuite.push(user);
        }
      } else {
        this.loggerProvider.log(
          'info',
          `usuário ${result.username} não está em suite`,
        );
      }
    });

    await Promise.all(promisePlaceHolder);

    return usersInSuite;
  }
}
export default SaveResultService;
