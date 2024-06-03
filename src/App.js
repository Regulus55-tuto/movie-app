import React, {useState} from 'react';

const App = () => {
    //1. 데이터를 담는 그릇 설정
    const [movies, setMovies] = useState([])

    //2. 데이터를 호출하는 함수 설정
    const getMovies = () =>{
        console.log("getMovies")
    }

    // 3. 함수 실행하는 버튼 만들기
    return (
        <div>
            <button onClick={()=>{
                getMovies()
            }}>버튼 </button>
        </div>
    );
};

export default App;