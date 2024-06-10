import MovieList from "./MovieList";
import TVList from "./TVList";
import MovieDetail from "./MovieDetail";
import TVDetail from "./TVDetail";

// components 라는 폴더 안에 index.js 라는 파일에서 모든 export 되는 component <> 를 관리한다
// 바로 import export 해도 되는데 관리 차원에서 한다고함
// components>MovieList> index.js> App.js 에 있는 router

export {MovieList, TVList, MovieDetail, TVDetail}