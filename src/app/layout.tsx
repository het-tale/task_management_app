import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/providers/react-query-provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: process.env.NEXT_PUBLIC_TITLE,
	description: process.env.NEXT_PUBLIC_DESC
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ReactQueryProvider>
					<div className="flex flex-col h-screen">
						<Header />
						{children}
					</div>
					<Toaster />
				</ReactQueryProvider>
			</body>
		</html>
	);
}
