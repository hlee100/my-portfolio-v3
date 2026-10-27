import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Prevent FontAwesome from dynamically adding CSS

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Henry Lee — IT, Networking & Cybersecurity Specialist",
  description:
    "Portfolio of Henry Lee: Computer Science & Cybersecurity student at CCSU, IT Logistics Technician, and Systems Specialist experienced in Active Directory, Network Infrastructure, Hardware Troubleshooting, and Python Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased selection:bg-sky-500/30 selection:text-sky-200">
      <body className="min-h-full flex flex-col font-sans bg-[#131210] text-[#f5f3ef]">
        {children}
      </body>
    </html>
  );
}
