import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {
    //1. 데이터를 담는 그릇 설정
    const [movies, setMovies] = useState([])

    //2. 데이터를 호출하는 함수 설정
    const getMovies = async () => {

        // try catch : try 먼저 실행하고 에러가 있으면 catch로 간다. try에 에러없으면 catch안가고 종료.
        // err(오브젝틈형태) 라는걸 받아서 console 로 찍어서 에러가 뭔지 본다.
        try {
            //그냥 url 만 요청하면 권한없다고 실패한다. 그래서 headers 에 Authorization 넣어서 가져온다.
            const config = {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRkNTI0MTVmNzNjNmY1MjI2ZGM2ZWZjNDE1MzMyMCIsInN1YiI6IjY2NWRhNGNkZDZjYzQxYWUxMGNjNzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqxSAgnIfRLqw13BQqYaihQhubUYJvCtHFtjSN1v9ZE'
                }
            }
            //axios 를 써서 영화 데이터를 받아오는거(url, Auth 를 통해서)/ axios.get(~~) 로
            const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", config)
            //console.log 찍을때 ("+++", result) 이렇게해서 +++ 찾으면 그 결과 볼수있게 한다.
            console.log("+++++++++++++++++++++++++++", result.data.results)
            setMovies(result.data.results)
        } catch (err) {
            console.log("---------------------------", err.message)
        }
    }

    //자동으로 시작하는 Hook
    useEffect(() => {
        getMovies()
    }, []);

    // 3. 함수 실행하는 버튼 만들기
    return (
        <div>
            {movies?.map((movie)=>(
                //setMovies(result.data.results) 안에 title이랑 정보가 있는데, 이게 movie 로 들어갔으니까(setMovie), movie.title 로 영화 제목만 가져온다
                <div>
                    <h1>{movie.title}</h1>
                    <h2>{movie.overview}</h2>
                    <h3>{movie.popularity}</h3>
                </div>
            ))}

        </div>
    );
};

export default App;