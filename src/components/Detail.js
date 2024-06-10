import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {

    const params = useParams()
    //location 하면 현재 url 의 위치 나타내주는것같음 ( /movie/13143 이런식으로)
    const location = useLocation()
    const [data, setData] = useState({})
    console.log(location.pathname.includes('movie'))
    // 위에처럼 하면 movie 가 포함되었는지 여부를 true false 로 알려준다.
    // 그거보고 movie 면 movie쪽으로, 아니면 tv쪽으로 보낼수있음.
    const getData = async () =>{
        try{
            const config = {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRkNTI0MTVmNzNjNmY1MjI2ZGM2ZWZjNDE1MzMyMCIsInN1YiI6IjY2NWRhNGNkZDZjYzQxYWUxMGNjNzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqxSAgnIfRLqw13BQqYaihQhubUYJvCtHFtjSN1v9ZE'
                }
            }
            const result = await axios.get(location.pathname.includes('movie') ? `https://api.themoviedb.org/3/movie/${params.id}?language=en-US` : `https://api.themoviedb.org/3/tv/${params.id}?language=en-US`, config)
            // axios 받아온거에서 movie 가 포함돼있으면 movie의 api를, 안돼있으면 tv의 api를 가져온다.
            setData(result.data)
            console.log(result.data)
        }catch(err){
            console.log('---',err)
        }
    }
    useEffect(() => {
        getData()
    }, []);

    return (
        <div>
            {location.pathname.includes('movie') ? data.title : data.name}
            {/*받아온 데이터 글자에 movie 가 포함돼있으면 title을, 없으면 name을 불러온다*/}
        </div>
    );
};

export default Detail;