import "./globals.css";
import NavMenu from "./components/Navigation";
import App from "./components/Speech";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-evenly mt-5">
          <h1>Navigation Menu Demo</h1>
          <App />
        </div>

        <NavMenu />

        {children}
      </body>
    </html>
  );
}
