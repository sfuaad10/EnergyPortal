import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader as plantsLoader } from "./pages/HomePage";
import RootPage from "./pages/RootPage";
import Information, { loader as inverterloader } from "./pages/Information";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", loader: plantsLoader, element: <HomePage /> },
      { path: "/info", loader: inverterloader, element: <Information /> },
    ],
  },
  // Added the new route for Home
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
