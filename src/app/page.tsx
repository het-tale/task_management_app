import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col justify-between w-full">
			<h1 className="m-auto text-2xl">Welcome to Task manager!</h1>
			<div className="flex justify-between my-24">
				<Link href={"/login"} className="w-full m-2">
					<Button className="w-full">Login</Button>
				</Link>

				<Link href={"/register"} className="w-full m-2">
					<Button className="w-full">Register</Button>
				</Link>
			</div>
		</div>
	);
}
