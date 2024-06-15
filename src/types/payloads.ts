import { z } from 'zod'
import { mandiUserSchema } from './users'

export const createUserPayloadSchema = z.object({
    userType: mandiUserSchema,
    name: z.string().min(3, { message: "Name minimum 3 letters" }),
    phoneNo: z.string().min(10, { message: "Phone Number minimum 10 digits" }).regex(/[0-9]/, { message: "Invalid Phone Number" }),
    address: z.string().optional(),
    userRoute: z.string().optional(),
    merchant: z.object({
        roomNo: z.string().optional(),
        items: z.string().optional(),
    }),
    workType: z.string().optional(),
})

export type CreateUserPayload = z.infer<typeof createUserPayloadSchema>