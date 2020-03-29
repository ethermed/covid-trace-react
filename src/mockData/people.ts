import { Roles } from "../ui/enums/Roles.enum";
import { Statuses } from "../ui/enums/Statuses.enum";
import { PersonInterface } from "../ui/types/Person.interface";

export const people: PersonInterface[] = [
  {
    lastname: "Smith",
    firstname: "bob",
    phone: "1",
    id: 12345,
    role: Roles.DOCTOR,
    status: Statuses.OK,
  },
  {
    lastname: "doe",
    firstname: "Jane",
    phone: "1",
    id: 12346,
    role: Roles.PATIENT,
    status: Statuses.INFECTED,
  },
  {
    lastname: "Vance",
    firstname: "Bob",
    phone: "5",
    id: 12347,
    role: Roles.STAFF,
    status: Statuses.AT_RISK,
  },
  {
    lastname: "John",
    firstname: "Jimmy",
    phone: "8675309",
    id: 12348,
    role: Roles.NURSE,
    status: Statuses.BEING_TESTED,
  },
];
