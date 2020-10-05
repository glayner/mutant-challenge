import ICreateAddressDTO from '@modules/users/dtos/ICreateAddressDTO';
import Address from '@modules/users/infra/typeorm/entities/Address';
import IAdressesRepository from '../IAdressesRepository';

class FakeAdressesRepository implements IAdressesRepository {
  private adresses: Address[] = [];

  public async create({
    street,
    suite,
    city,
    zipcode,
  }: ICreateAddressDTO): Promise<Address> {
    const address = new Address();
    Object.assign(address, {
      id: this.adresses.length + 1,
      street,
      suite,
      city,
      zipcode,
      create_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    this.adresses.push(address);

    return address;
  }
}

export default FakeAdressesRepository;
