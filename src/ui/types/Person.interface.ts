import { Statuses } from "../enums/Statuses.enum";
import { Roles } from "../enums/Roles.enum";

export interface PersonInterface {
  id: number;
  role: Roles;
  status: Statuses;
  firstname: string;
  lastname: string;
  phone: string;
}
