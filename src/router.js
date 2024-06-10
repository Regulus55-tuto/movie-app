import {createBrowserRouter} from "react-router-dom";
import {MovieList, TVList} from "./components";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MovieList/>
    },
    {
        path: "/tvs",
        element: <TVList/>
    }
])



export default router