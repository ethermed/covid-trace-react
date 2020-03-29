import { SortTypes } from "../../enums/SortTypes.enum";
import { PersonInterface } from "../../types/Person.interface";

export const sortPeople = (sortType: SortTypes, people: PersonInterface[]) => {
  const sortKey = sortType === "name" ? "lastname" : sortType;

  return people.sort((a, b) => {
    var textA = a[sortKey].toUpperCase();
    var textB = b[sortKey].toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
};
