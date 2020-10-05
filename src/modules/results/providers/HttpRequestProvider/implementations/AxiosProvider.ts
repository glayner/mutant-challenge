import Axios from 'axios';
import IHttpRequestProvider from '../models/IHttpRequestProvider';

export default class AxiosProvider implements IHttpRequestProvider {
  public async getUrl(url: string): Promise<unknown> {
    const { data } = await Axios.get(url);

    return data;
  }
}
