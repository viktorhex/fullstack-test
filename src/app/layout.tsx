import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata = {
  title: "Fullstack Demo",
  description: "A full-stack demo application",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
