import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { ROUTES } from "./constants";
import ChartPage from "./views/Chart";
import { Home } from "./views/home";
import Navbar from "./views/navbar";
import createRootStore from "./redux/store/root.store";
import { Provider } from "react-redux";

const store = createRootStore();

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <div className="flex flex-col">
        <Navbar />
        <main className="m-auto mx-auto w-[100%] max-2xl:max-w-[1200px] max-xl:max-w-[90vw] max-w-3xl py-20 px-10 text-center">
          <Outlet />
        </main>
      </div>
    ),
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.CHART,
        element: <ChartPage />,
      },
      {
        path: ROUTES.TRANSACTIONS,
        element: <div>Transactions</div>,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
