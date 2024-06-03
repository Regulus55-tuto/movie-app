import React, {useState} from 'react';

const App = () => {
    const [movies, setMovies] = useState([
        {"title": "범죄도시1", "desc":"설명1","category":"카테고리1"},
        {"title": "범죄도시2", "desc":"설명2","category":"카테고리2"},
        {"title": "범죄도시3","desc":"설명3","category":"카테고리3"},
        {"title": "범죄도시4","desc":"설명4","category":"카테고리4"},
    ])



    return (
        <div>
            {movies && movies.map((movie)=> (
                <div>
                    <h1>{movie.title}</h1>
                    <h2>{movie.desc}</h2>
                    <h3>{movie.category}</h3>
                </div>
            ))}
        </div>
    );
};

export default App;