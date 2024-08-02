import { RouterProvider } from "react-router-dom";
import { MainRoutes } from "./Routes/MainRoutes";

const App = () => {
  return <RouterProvider router={MainRoutes} />;
};

export default App;
