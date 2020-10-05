import { container } from 'tsyringe';

import '@modules/results/providers';
import './providers';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import AdressesRepository from '@modules/users/infra/typeorm/repositories/AdressesRepository';
import IAdressesRepository from '@modules/users/repositories/IAdressesRepository';
import IContactsRepository from '@modules/users/repositories/IContactsRepository';
import ContactsRepository from '@modules/users/infra/typeorm/repositories/ContactsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IAdressesRepository>(
  'AdressesRepository',
  AdressesRepository,
);

container.registerSingleton<IContactsRepository>(
  'ContactsRepository',
  ContactsRepository,
);
