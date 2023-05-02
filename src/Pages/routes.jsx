import { Navigate } from "react-router-dom";
import PageHome from "./PageHome";
import DataPoke from "./data/DataPoke";

const routes = [
    {
      path: "*",
      element: <div>404 Not found</div>,
    },
    {
        path: "/",
        element: <Navigate to="/Home" />,
    },
    {
        path: "/Home",
        element: <PageHome />,
    },
    {
        path: "/Data",
        element: <DataPoke/>
    }
]

export default routes;