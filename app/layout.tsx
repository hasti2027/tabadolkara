import Footer from "./Footer";
import "./global.css";
import Header from "./Header";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
