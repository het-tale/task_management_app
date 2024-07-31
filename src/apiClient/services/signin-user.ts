"use client";
import { signIn } from "next-auth/react";

export const SignInUser = async ({
	email,
	password,
	toast,
	router
}: {
	email: string;
	password: string;
	toast: any;
	router: any;
}) => {
	try {
		const response: any = await signIn("credentials", {
			email,
			password,
			redirect: false
		});

		if (!response?.error) {
			router.push("/home");
			router.refresh();
		}

		if (!response.ok) {
			throw new Error(response.error);
		}

		toast({ title: "Login Successful" });
	} catch (error: any) {
		toast({
			title: "Login Failed",
			description: error.message,
			variant: "destructive"
		});
	}
};
