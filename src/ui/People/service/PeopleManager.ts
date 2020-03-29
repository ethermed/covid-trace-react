import { PersonInterface } from "../../types/Person.interface";
import { makeQueryString } from "./helpers/makeQueryString";
import { Filter } from "../../components/Control/Filters";
import { traceClient } from "../../../service/Client";
import { ApiContent } from "../../types/ApiContent";
import { ContentStatuses } from "../../enums/ContentStatuses.enum";

class PeopleManager {
  async get(filters: Filter[]): Promise<ApiContent<PersonInterface[]>> {
    const qs = makeQueryString(filters);

    try {
      const { data: content } = await traceClient.getPeople(qs as string);

      return new ApiContent({ content, contentStatus: ContentStatuses.OK });
    } catch (error) {
      return new ApiContent({
        content: [],
        contentStatus: ContentStatuses.ERROR,
      });
    }
  }
}

export const peopleManager = new PeopleManager();
