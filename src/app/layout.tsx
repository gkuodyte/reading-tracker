import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

const roboto = Roboto_Condensed({
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Reading Tracker",
	description: "Where you can track my reading progress",
	viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={roboto.className}>
			<body>
        <div>
        <Navbar />
					<main>{children}</main>
        </div>
			</body>
		</html>
	);
}
