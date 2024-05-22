import "./globals.css";
import NavMenu from "./components/Navigation";
import App from "./components/Speech";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Navigation Menu Demo</h1>
        <NavMenu />
        <App />
        {children}
      </body>
    </html>
  );
}
