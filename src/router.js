import {createBrowserRouter} from "react-router-dom";
import {TVDetail ,MovieDetail, MovieList, TVList} from "./components";



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
        path: "/moviedetail/:id",
        element: <MovieDetail/>
    },
    {
        path: "/tvdetail/:id",
        element: <TVDetail/>
    }
])



export default router