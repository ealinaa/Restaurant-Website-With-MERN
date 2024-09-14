import {z} from "zod";

export const userSignupSchema = z.object({
    fullname:z.string().min(1, "fullname is required")

})