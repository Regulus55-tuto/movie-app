import {createBrowserRouter} from "react-router-dom";
import {MovieList, TVList, Detail} from "./components";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MovieList/>
    },
    {
        path: "/tvs",
        element: <TVList/>
    },
    {
        path: "/movie/:id",
        element: <Detail/>
    },
    {
        path: "/tv/:id",
        element: <Detail/>
    }
])



export default router