import { z } from 'zod';
export const mandiUserSchema = z.union([
    z.literal('customer'),
    z.literal('merchant'),
    z.literal('worker')
])
export type MandiUser = z.infer<typeof mandiUserSchema>