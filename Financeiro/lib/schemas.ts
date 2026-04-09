import { z } from "zod";
import Decimal from "decimal.js";

const DecimalSchema = z.union([z.string(), z.number()]).transform((val) => new Decimal(val));

export const CreateTransactionSchema = z.object({
  description: z.string().min(2).max(255),
  amount: DecimalSchema,
  type: z.enum(["EXPENSE", "INCOME"]),
  payment_method: z.enum(["CASH", "CREDIT", "DEBIT", "PIX"]),
  category_id: z.string().uuid(),
  is_essential: z.boolean().default(false),
  timestamp: z.string().datetime().optional().default(() => new Date().toISOString()),
});

export type CreateTransaction = z.infer<typeof CreateTransactionSchema>;