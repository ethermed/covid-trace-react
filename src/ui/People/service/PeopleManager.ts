import { people } from "../../../mockData/people";

class PeopleManager {
  async get() {
    const { data } = await Promise.resolve({ data: people });

    return data;
  }
}

export const peopleManager = new PeopleManager();
