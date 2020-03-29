import { PersonInterface } from "../../types/Person.interface";
import { makeQueryString } from "./helpers/makeQueryString";
import { Filter } from "../../components/Control/Filters";
import { traceClient } from "../../../service/Client";

class PeopleManager {
  async get(filters: Filter[]): Promise<PersonInterface[]> {
    const qs = makeQueryString(filters);

    try {
      const { data } = await traceClient.getPeople(qs);

      return data;
    } catch (error) {
      return [];
    }
  }
}

export const peopleManager = new PeopleManager();
