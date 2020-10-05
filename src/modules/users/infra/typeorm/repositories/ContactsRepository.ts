import { Repository, getRepository } from 'typeorm';

import IContactsRepository from '@modules/users/repositories/IContactsRepository';
import ICreateContactDTO from '@modules/users/dtos/ICreateContactDTO';
import Contact from '../entities/Contact';

class ContactsRepository implements IContactsRepository {
  private ormRepository: Repository<Contact>;

  constructor() {
    this.ormRepository = getRepository(Contact);
  }

  public async create({
    email,
    phone,
    website,
  }: ICreateContactDTO): Promise<Contact> {
    const newContact = new Contact();
    Object.assign(newContact, {
      email,
      phone,
      website,
    });

    const contact = this.ormRepository.create(newContact);

    await this.ormRepository.save(contact);

    return contact;
  }
}
export default ContactsRepository;
