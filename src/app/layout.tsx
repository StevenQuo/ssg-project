import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense, type ReactNode } from "react";
import { type Metadata } from "next";
import { DraftModeNotification } from "@/ui/components/DraftModeNotification";
import Header from "@/ui/components/Header";

const inter = Inter({ 
  variable: "--font-inter",
  subsets: ["latin"] 
});

export const metadata: Metadata = {
	title: "E-Commerce App SSG",
	description: "Starter pack for building performant e-commerce",
};

export default function RootLayout(props: { children: ReactNode }) {
	const { children } = props;

	return (
		<html lang="en" className="min-h-dvh">
			<body className={`${inter.className} min-h-dvh`}>
				<Header />
				<div className="">{children}</div>
				<Suspense>
					<DraftModeNotification />
				</Suspense>
			</body>
		</html>
	);
}
