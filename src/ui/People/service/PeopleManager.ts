import { people as peopleMock } from "../../../mockData/people";
import { Person } from "../PeopleContainer";

class PeopleManager {
  async get(filters: string): Promise<Person[]> {
    try {
      const { data } = await Promise.resolve({ data: peopleMock });

      return data;
    } catch (error) {
      return [];
    }
  }
}

export const peopleManager = new PeopleManager();
