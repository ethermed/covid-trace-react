import { PersonInterface } from "../../types/Person.interface";

export const makePeopleSearchable = (people: PersonInterface[]) =>
  people.map((person) => {
    return {
      id: person.id,
      searchData: Object.values(person)
        .join(" ")
        .toUpperCase(),
    };
  });
