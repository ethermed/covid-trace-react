import { Roles } from "../ui/enums/Roles.enum";
import { Statuses } from "../ui/enums/Statuses.enum";
import { PersonAtRisk } from "../ui/Person/PersonContainer";

export const peopleAtRisk: PersonAtRisk[] = [
  {
    lastname: "Smith",
    firstname: "bob",
    phone: "1",
    id: 12345,
    role: Roles.DOCTOR,
    status: Statuses.HEALTHY,
    risk: 0,
  },
  {
    lastname: "doe",
    firstname: "Jane",
    phone: "1",
    id: 12346,
    role: Roles.PATIENT,
    status: Statuses.INFECTED,
    risk: 1,
  },
  {
    lastname: "Vance",
    firstname: "Bob",
    phone: "5",
    id: 12347,
    role: Roles.STAFF,
    status: Statuses.AT_RISK,
    risk: 0.5,
  },
  {
    lastname: "John",
    firstname: "Jimmy",
    phone: "8675309",
    id: 12348,
    role: Roles.NURSE,
    status: Statuses.BEING_TESTED,
    risk: 0.8,
  },
];
