export class BaseService {
  constructor(endpoint, httpClient) {
    this.endpoint = endpoint;
    this.httpClient = httpClient;
  }

  get = (url = '', config = {}) => this.httpClient.get(`${this.endpoint}${url}`, config);
  post = (url = '', data = {}, config = {}) => this.httpClient.post(`${this.endpoint}${url}`, data, config);
  put = (url = '', data = {}, config = {}) => this.httpClient.put(`${this.endpoint}${url}`, data, config);
  delete = (url = '', config = {}) => this.httpClient.delete(`${this.endpoint}${url}`, config);
  patch = (url = '', data = {}, config = {}) => this.httpClient.patch(`${this.endpoint}${url}`, data, config);
}