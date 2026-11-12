import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import { EventsProvider } from "../context/EventsContext";

export const metadata = {
  title: "Campusly — Find your campus moment",
  description:
    "Discover, save, and share the events that make campus life memorable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <EventsProvider>
          <SiteHeader />
          <main className="min-h-[calc(100vh-76px)]">{children}</main>
        </EventsProvider>
      </body>
    </html>
  );
}
