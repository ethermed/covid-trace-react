import { AxiosInstance, default as axios, AxiosResponse } from "axios";
import { Statuses } from "../ui/enums/Statuses.enum";

const httpClient: AxiosInstance = axios.create({
  baseURL: "https://api.covidbacktrace.com/v1",
});

class TraceClient {
  async getPeople(params: string): Promise<AxiosResponse> {
    return httpClient.get(`/people${params}`);
  }

  async getPerson(id: number): Promise<AxiosResponse> {
    return httpClient.get(`/people/id/${id}`);
  }

  async setStatus(id: number, status: Statuses): Promise<AxiosResponse> {
    return httpClient.post(`/status/${status}/id/${id}`);
  }

  async getAtRisk(id: number, threshold: number, max: number) {
    return httpClient.post(
      `/analyze-at-risk?Id=${id}&threshold=${threshold}&max=${max}`
    );
  }

  async getAtRiskDetails(atRiskId: number, infectedId: number, max: number) {
    return httpClient.get(
      `/analyze-at-risk-details?At_risk_id=${atRiskId}&Infected_id=${infectedId}&max=${max}`
    );
  }
}

export const traceClient = new TraceClient();
