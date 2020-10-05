import ICreateAddressDTO from '@modules/users/dtos/ICreateAddressDTO';
import IAdressesRepository from '@modules/users/repositories/IAdressesRepository';
import { Repository, getRepository } from 'typeorm';
import Address from '../entities/Address';

class AdressesRepository implements IAdressesRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create({
    street,
    suite,
    city,
    zipcode,
  }: ICreateAddressDTO): Promise<Address> {
    const newAddress = new Address();
    Object.assign(newAddress, {
      street,
      suite,
      city,
      zipcode,
    });

    const address = this.ormRepository.create(newAddress);

    await this.ormRepository.save(address);

    return address;
  }
}
export default AdressesRepository;
