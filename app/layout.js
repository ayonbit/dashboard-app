import { Inter } from "next/font/google";

import "./ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard App",
  description: "Dashboards",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
