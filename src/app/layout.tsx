import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers, TanstackProvider } from "@/common/providers";
import { Footer, Header } from "@/components";
import { inter } from "@/styles/fonts";

const titleSite = "DCiel Template";
const descriptionSite = "Default template studio";

export const metadata: Metadata = {
	title: titleSite,
	description: descriptionSite,
	authors: {
		name: "darkc1el",
		url: "https://github.com/faes763",
	},
	creator: "darkc1el",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="dark" lang="en">
			<body className={`${inter.className} antialiased`}>
				<TanstackProvider>
					<Header />
					{children}
					<Footer />
					<Providers />
				</TanstackProvider>
			</body>
		</html>
	);
}
