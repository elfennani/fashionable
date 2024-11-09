import { z } from "zod";

export const sortSchema = z.enum([
  "DATE_ADDED_ASC",
  "DATE_ADDED_DESC",
  "PRICE_ASC",
  "PRICE_DESC",
  "NAME_ASC",
  "NAME_DESC",
  "POPULAR",
]);

export type Sort = z.infer<typeof sortSchema>;
