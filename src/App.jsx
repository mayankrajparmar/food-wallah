import { createBrowserRouter, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    <div className="w-full flex flex-col justify-between items-center mt-[120px] min-h-[calc(100vh-120px)]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

// Children Routes
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restaurant/:resID",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default App;
