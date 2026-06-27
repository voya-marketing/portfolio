import { useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate, ScrollRestoration } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import CaseStudies from "./pages/CaseStudies";
import Privacy from "./pages/Privacy";
import LoadingScreen from "@/components/shared/LoadingScreen";

function WithScroll({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      {children}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <WithScroll><Home /></WithScroll>
  },
  {
    path: "/portfolio",
    element: <Navigate to="/portfolio/reels" replace />
  },
  {
    path: "/portfolio/:category",
    element: <WithScroll><Portfolio /></WithScroll>
  },
  {
    path: "/case-studies",
    element: <WithScroll><CaseStudies /></WithScroll>
  },
  {
    path: "/privacy",
    element: <WithScroll><Privacy /></WithScroll>
  }
]);

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <RouterProvider router={router} />
    </>
  );
}
