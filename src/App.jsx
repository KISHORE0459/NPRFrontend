import Overview from "./pages/Overview";
import Entries from "./pages/Entries";
import Exits from "./pages/Exits";
import About from "./pages/About";
import User from "./pages/User";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Overview />,
    },
    {
      path: "/entries",
      element: <Entries />,
    },
    {
      path: "/exits",
      element: <Exits />,
    },
    {
      path: "/users",
      element: <User />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  const queryclient = new QueryClient();
  return (
    <div className="min-h-dvh bg-gray-800 text-white font-sans">
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
