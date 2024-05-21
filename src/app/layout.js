import "./globals.css";
import NavMenu from "./components/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Navigation Menu Demo</h1>
        <NavMenu />
        {children}
      </body>
    </html>
  );
}
