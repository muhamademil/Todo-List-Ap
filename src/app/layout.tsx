import "./globals.css";

export const metadata = {
  title: "Todo List App",
  description: "Simple Todo App with Local Storage & Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">{children}</body>
    </html>
  );
}
