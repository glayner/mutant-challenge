import ICreateAddressDTO from '../dtos/ICreateAddressDTO';
import Address from '../infra/typeorm/entities/Address';

export default interface IAdressesRepository {
  create(data: ICreateAddressDTO): Promise<Address>;
}
