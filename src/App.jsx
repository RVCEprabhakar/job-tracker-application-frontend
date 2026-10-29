
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Applications from "./components/Applications";
import ApplicationForm from "./components/ApplicationForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
  },
  
  {
    path: "/applications",
    element: (
      <>
        <Navbar />
        <Applications />
      </>
    ),
  },

  {
    path: "/applications/add",
    element: (
      <>
        <Navbar />
        <ApplicationForm />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
