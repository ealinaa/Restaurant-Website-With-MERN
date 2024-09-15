
import {z} from "zod";

export const userSignupSchema = z.object({
    fullname:z.string().min(1, "Fullname is required"),
    email:z.string().email("Invalid email address"),
    password: z.string().min(6,"Password must be at least 6 characters "),
    contact: z.string().min(10, "Contact must be 10 digits"),


})
export type signupInputState = z.infer<typeof userSignupSchema>