import { HttpClient } from './httpClient.js';  // Assurez-vous que le chemin est correct

export class FetchHttpClient extends HttpClient {
  async request(method, url, data = null, config = {}) {
    const fullUrl = `${this.baseURL}${url}`;
    const options = {
      method,
      ...this.defaultConfig,
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...this.defaultConfig.headers,
        ...config.headers,
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(fullUrl, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error in ${method} request:`, error);
      throw error;
    }
  }
}
