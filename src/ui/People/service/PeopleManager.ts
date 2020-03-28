import { people as peopleMock } from "../../../mockData/people";
import { Filter } from "../../Filters";
import { PersonInterface } from "../../Person/Person";

class PeopleManager {
  async get(filters: Filter[]): Promise<PersonInterface[]> {
    try {
      const { data } = await Promise.resolve({ data: peopleMock });

      return data;
    } catch (error) {
      return [];
    }
  }
}

export const peopleManager = new PeopleManager();
