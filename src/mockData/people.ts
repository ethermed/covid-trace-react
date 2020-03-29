import { Roles } from "../ui/enums/Roles.enum";
import { Statuses } from "../ui/enums/Statuses.enum";
import { PersonInterface } from "../ui/types/Person.interface";

export const people: PersonInterface[] = [
  {
    name: "Bob Smith",
    id: 12345,
    role: Roles.DOCTOR,
    status: Statuses.OK,
  },
  {
    name: "Jane doe",
    id: 12346,
    role: Roles.PATIENT,
    status: Statuses.INFECTED,
  },
  {
    name: "Bob Vance",
    id: 12347,
    role: Roles.STAFF,
    status: Statuses.AT_RISK,
  },
  {
    name: "Jimmy John",
    id: 12348,
    role: Roles.NURSE,
    status: Statuses.BEING_TESTED,
  },
];
