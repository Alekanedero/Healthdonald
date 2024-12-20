import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AdminActions } from "@/components/features/admin/admin-actions";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Healthdonald",
  description: "Start eating healthy burger.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "h-full"
        )}
      >
        <Toaster />
        <AdminActions />
        <div className="relative m-auto flex max-h-full min-h-full max-w-md flex-col gap-2 border-x py-2">
          <Header />
          <div className="flex-1 pt-2">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
