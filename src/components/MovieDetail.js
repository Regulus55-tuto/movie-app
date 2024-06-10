import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const MovieDetail = () => {
    const params = useParams()
    const [detail, setDetail] = useState({})

    const getDetails = async () => {
        try{
            const config = {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRkNTI0MTVmNzNjNmY1MjI2ZGM2ZWZjNDE1MzMyMCIsInN1YiI6IjY2NWRhNGNkZDZjYzQxYWUxMGNjNzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqxSAgnIfRLqw13BQqYaihQhubUYJvCtHFtjSN1v9ZE'
                }
            }
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, config)
            console.log('+++++',result.data);
            setDetail(result.data)
        } catch(err){
            console.log('-----',err)
        }
    }

    useEffect(() => {
        getDetails()
    }, []);

    return (
        <div>
            <h1>{detail.title}</h1>

        </div>
    );
};

export default MovieDetail;