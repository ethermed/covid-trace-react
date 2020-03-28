import { traceClient } from "../../../service/Client";
import { PersonInterface } from "../Person";

class PersonManager {
  getPerson(id: number) {
    try {
      return traceClient.getPerson(id);
    } catch (e) {}
  }

  getAtRisk(id: number, threshold: number, max: number) {
    try {
      return traceClient.getAtRisk(id, threshold, max);
    } catch (e) {}
  }

  getAtRiskDetails(atRiskId: number, infectedId: number, max: number) {
    try {
      return traceClient.getAtRisk(atRiskId, infectedId, max);
    } catch (e) {}
  }

  setStatus(id: number, payload: PersonInterface) {
    try {
      return traceClient.setStatus(id, payload);
    } catch (e) {}
  }
}

export const personManager = new PersonManager();
