import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <Sidebar />

          <div className="flex flex-1 flex-col">
            <Navbar />

            <main className="flex-1 p-6 bg-slate-100">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}