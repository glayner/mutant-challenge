export default interface IHttpRequestProvider {
  getUrl(url: string): Promise<unknown>;
}
