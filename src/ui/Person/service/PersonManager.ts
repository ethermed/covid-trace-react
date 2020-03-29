import { traceClient } from "../../../service/Client";
import { PersonInterface } from "../../types/Person.interface";
import { ApiContent } from "../../types/ApiContent";
import { ContentStatuses } from "../../enums/ContentStatuses.enum";
import { AtRiskDetails } from "../../types/AtRiskDetails";
import { Statuses } from "../../enums/Statuses.enum";
import { peopleAtRisk } from "../../../mockData/peopleAtRisk";

class PersonManager {
  async getPageContent(
    id: number
  ): Promise<
    ApiContent<{ person: PersonInterface; peopleAtRisk: PersonInterface[] }>
  > {
    try {
      const [person, peopleAtRisk] = await Promise.all([
        traceClient.getPerson(id),
        traceClient.getAtRisk(id),
      ]);

      const content = {
        person: person.data,
        peopleAtRisk: peopleAtRisk.data.results,
      };

      return new ApiContent({
        content,
        contentStatus: ContentStatuses.OK,
      });
    } catch (e) {
      return new ApiContent({
        contentStatus: ContentStatuses.ERROR,
      });
    }
  }

  async getAtRiskDetails(
    atRiskId: number,
    infectedId: number,
    max: number
  ): Promise<ApiContent<AtRiskDetails>> {
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
