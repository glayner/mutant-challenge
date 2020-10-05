import Address from '../infra/typeorm/entities/Address';
import Contact from '../infra/typeorm/entities/Contact';

export default interface ICreateUserDTO {
  name: string;

  username: string;

  address: Address;

  contact: Contact;
}
