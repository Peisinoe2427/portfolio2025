import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import "./styles/reset.css";
import "./styles/app.css";
import TabBar from "./components/TabBar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import ClickSpark from './components/bits/ClickSpark';

export default function  App() {
  return (
    <ClickSpark
      sparkColor='#B7C1FE'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <Outlet/>
    </ClickSpark>
  );
}


export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links /> 
        <style>{`
          .no-js-warning {
            background: #ffcccc;
            color: #900;
            padding: 1em;
            text-align: center;
            font-weight: bold;
          }
        `}</style>
      </head>
      <body>
        <noscript>
          <div className="no-js-warning">
            ⚠️ This site requires JavaScript to function properly. Please enable JavaScript in your browser settings.
          </div>
        </noscript>
        <TopBar></TopBar>
        {children}
        <Footer></Footer>
        <TabBar></TabBar>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }){
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (process.env.NODE_ENV !== "production" && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}


export function HydrateFallback(){
  return (
      <div className="spinner"></div>
  );
}

export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Manrope:wght@200..800&display=swap",
    },

  ];
}