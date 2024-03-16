import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { SideMenu } from "~/components/SideMenu";
import Header from "~/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Photos App",
  description: "Photo Management App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable} bg-zinc-950`}>
        <Header />
        <div className="container flex min-h-screen">
          <SideMenu />
          <div className="ml-[320px] flex-grow p-14">{children}</div>
        </div>
      </body>
    </html>
  );
}
