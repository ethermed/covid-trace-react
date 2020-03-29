import { ContentStatuses } from "../enums/ContentStatuses.enum";
import { cloneDeep } from "lodash";

export class ApiContent<T> {
  content?: T;
  contentStatus: ContentStatuses = ContentStatuses.LOADING;
  constructor(data: Partial<ApiContent<T>> = {}) {
    Object.assign(this, { ...cloneDeep(data) });
  }
}
