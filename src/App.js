import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {
  createBrowserRouter,
  RouterProvider, Outlet,
} from "react-router-dom";
import Details from "./Components/Details";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/details',
        element: <Details />
      }
    ]
  }
]);

function App() {
  return (
    <div className="app_container">
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
