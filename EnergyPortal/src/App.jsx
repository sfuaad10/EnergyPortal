import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootPage from "./pages/RootPage";
import InverterInformation, {
  loader as inverterloader,
} from "./pages/InverterInformation";
import PlantInformation, {
  loader as plantLoader,
} from "./pages/PlantInformation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/plants/info",
        loader: plantLoader,
        element: <PlantInformation />,
      },
      {
        path: "/inverters/info",
        loader: inverterloader,
        element: <InverterInformation />,
      },
    ],
  },
  // Added the new route for Home
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
