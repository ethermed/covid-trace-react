import { Person } from "../ui/People/PeopleContainer";
import { Roles, Statuses } from "../ui/People/types";

export const people: Person[] = [
  {
    name: "Bob Smith",
    id: 12345,
    role: Roles.DOCTOR,
    status: Statuses.OK
  },
  {
    name: "Jane doe",
    id: 12346,
    role: Roles.PATIENT,
    status: Statuses.INFECTED
  },
  {
    name: "Bob Vance",
    id: 12347,
    role: Roles.STAFF,
    status: Statuses.AT_RISK
  },
  {
    name: "Jimmy John",
    id: 12348,
    role: Roles.NURSE,
    status: Statuses.BEING_TESTED
  }
];
