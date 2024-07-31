import { z } from "zod";
export const formSchema = z.object({
	email: z.string().email("This is not a valid email"),
	password: z.string().min(8, "a password must contain at least 8 characters")
});
