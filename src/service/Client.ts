import { AxiosInstance, default as axios } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "http://192.168.123.245/v1"
});

class Client {
  async getPeople(params: string) {
    return httpClient.get(`/people?${params}`);
  }
}

export const client = new Client();
