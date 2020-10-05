import ICreateContactDTO from '@modules/users/dtos/ICreateContactDTO';
import Contact from '@modules/users/infra/typeorm/entities/Contact';
import IContactsRepository from '../IContactsRepository';

class FakeContactsRepository implements IContactsRepository {
  private contacts: Contact[] = [];

  public async create({
    email,
    phone,
    website,
  }: ICreateContactDTO): Promise<Contact> {
    const contact = new Contact();

    Object.assign(contact, {
      id: this.contacts.length + 1,
      email,
      phone,
      website,
      create_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    this.contacts.push(contact);

    return contact;
  }
}

export default FakeContactsRepository;
