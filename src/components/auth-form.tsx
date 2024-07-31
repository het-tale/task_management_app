"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/form-validation";

import { useCreateUser } from "@/apiClient/hooks/useCreateUser";

export default function AuthForm({ isLogin }: { isLogin: boolean }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	});
	const { mutation } = useCreateUser();
	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		if (!isLogin) mutation.mutate(data);
	};
	return (
		<div className="flex flex-col justify-between w-full">
			<h1 className="m-auto text-2xl">{isLogin ? "Login!" : "Register!"}</h1>
			<div className="flex flex-col justify-between my-24">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8 m-auto"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="Type your email here" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder="Type your password here" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							{isLogin ? "Login" : "Register"}
						</Button>
					</form>
				</Form>
				<Link href={isLogin ? "/register" : "/login"} className="m-auto mt-4">
					<Button className="">
						{isLogin
							? "You don't have an account ? Register Here."
							: "Already have an account ? Login here."}
					</Button>
				</Link>
			</div>
		</div>
	);
}
