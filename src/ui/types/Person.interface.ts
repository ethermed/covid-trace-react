import { Statuses } from "../enums/Statuses.enum";
import { Roles } from "../enums/Roles.enum";

export interface PersonInterface {
  name: string;
  id: number;
  role: Roles;
  status: Statuses;
}
