import { PersonInterface } from '../../Person/Person';
import { makeQueryString } from './helpers/makeQueryString';
import { Filter } from '../../Filters';
import { traceClient } from '../../../service/Client';

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
