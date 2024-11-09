import { Sort } from "./Sort";

export default interface Filter {
  category?: number;
  color?: number;
  min?: number;
  max?: number;
  sort?: Sort;
  search?: string;
  page?: number;
}
