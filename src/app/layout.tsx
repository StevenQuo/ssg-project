import { Inter } from "next/font/google";
import "./globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import Header from "@/ui/components/Header";
import Footer from "@/ui/components/Footer";

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
				<Footer />
			</body>
		</html>
	);
}
