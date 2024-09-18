import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact, Landing } from "./pages/index.ts";
import Grievance from "./pages/Grievance.tsx";
import TermsAndCondition from "./pages/TermAndCondition.tsx";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy.tsx";
import CaseStudyPage from "./pages/CaseStudy.tsx";
import Partners from "./pages/Partners.tsx";
import Blogs from "./pages/Blogs.tsx";
import AboutUs from "./pages/AboutUs.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "grievance",
        element: <Grievance />,
      },
      {
        path: "/term-and-condition",
        element: <TermsAndCondition />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyAndPolicy />,
      },
      {
        path: "case-study",
        element: <CaseStudyPage />,
      },
      {
        path: "/partners",
        element: <Partners />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router}></RouterProvider>
);
