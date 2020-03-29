import { traceClient } from "../../../service/Client";
import { PersonInterface } from "../../types/Person.interface";
import { ApiContent } from "../../types/ApiContent";
import { ContentStatuses } from "../../enums/ContentStatuses.enum";
import { AtRiskDetails } from '../../types/AtRiskDetails';
import { Statuses } from '../../enums/Statuses.enum';

class PersonManager {
  async getPerson(id: number): Promise<ApiContent<PersonInterface>> {
    try {
      const { data } = await traceClient.getPerson(id);

      return new ApiContent({
        content: data,
        contentStatus: ContentStatuses.OK,
      });
    } catch (e) {
      return new ApiContent({
        contentStatus: ContentStatuses.ERROR,
      });
    }
  }

  async getAtRisk(
    id: number,
    threshold: number,
    max: number
  ): Promise<ApiContent<PersonInterface>> {
    try {
      const { data } = await traceClient.getAtRisk(id, threshold, max);
      return new ApiContent({
        content: data,
        contentStatus: ContentStatuses.OK,
      });
    } catch (e) {
      return new ApiContent({
        contentStatus: ContentStatuses.ERROR,
      });
    }
  }

  async getAtRiskDetails(atRiskId: number, infectedId: number, max: number): Promise<ApiContent<AtRiskDetails>> {
    try {
      const { data } = await traceClient.getAtRiskDetails(
        atRiskId,
        infectedId,
        max
      );
      return new ApiContent({
        content: data,
        contentStatus: ContentStatuses.OK,
      });
    } catch (e) {
      return new ApiContent({
        contentStatus: ContentStatuses.ERROR,
      });
    }
  }

  setStatus(id: number, status: Statuses) {
    try {
      return traceClient.setStatus(id, status);
    } catch (e) {}
  }
}

export const personManager = new PersonManager();
