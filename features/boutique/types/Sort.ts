import { z } from "zod";

export const sortSchema = z.enum(["popular", "increasing", "decreasing"]);

export type Sort = z.infer<typeof sortSchema>;
