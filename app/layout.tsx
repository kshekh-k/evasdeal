import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.scss";
import StoreProvider from "./store-provider";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--nunito",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--dmsans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <StoreProvider>
      <html lang="en" className={`${nunito.variable} ${dmsans.variable}`}>
        <body className={`antialiased bg-white`}>
          <div className="overflow-hidden">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
};
export default RootLayout;
