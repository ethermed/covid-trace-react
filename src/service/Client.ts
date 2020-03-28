import { AxiosInstance, default as axios, AxiosResponse } from "axios";

const httpClient: AxiosInstance = axios.create({
  baseURL: "http://192.168.123.245/v1"
});

class TraceClient {
  async getPeople(params: string): Promise<AxiosResponse> {
    return httpClient.get(`/people${params}`);
  }
}

export const traceClient = new TraceClient();
