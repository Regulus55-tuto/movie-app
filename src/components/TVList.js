import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

const TVList = () => {
    const [tvs, setTvs] = useState([])
    const getTvs = async () => {
        try {
            const config = {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODRkNTI0MTVmNzNjNmY1MjI2ZGM2ZWZjNDE1MzMyMCIsInN1YiI6IjY2NWRhNGNkZDZjYzQxYWUxMGNjNzZmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SqxSAgnIfRLqw13BQqYaihQhubUYJvCtHFtjSN1v9ZE'
                }
            }
            const result = await axios.get("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1", config)
            console.log("++++++++++", result.data.results)
            setTvs(result.data.results)
        } catch (err) {
            console.log('---------', err.message)
        }
    }

    useEffect(() => {
        getTvs()
    }, []);

    return (
        <container>
            <Row>
                {tvs?.map((tv, index) => (
                    <Col className={"mt-3"} key={index}>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + tv.poster_path}/>
                            <Card.Body>
                                <Card.Title><h1>{tv.name.slice(0, 10)}</h1></Card.Title>
                                <Card.Text>
                                    {tv.overview.length === 0 ? "내용없음" : tv.overview.slice(0, 80)}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </container>)
};

export default TVList;