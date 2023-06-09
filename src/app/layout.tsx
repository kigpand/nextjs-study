import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>테스틍</h1>
          <nav>
            <Link href={"/contact"}>Contact</Link>
            <Link href={"/about"}>About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
