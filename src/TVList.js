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
                {tvs?.map((tv) => (
                    <Col className={"mt-3"}>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + tv.poster_path}/>
                            <Card.Body>
                                <Card.Title>{tv.name.slice(0, 10)}</Card.Title>
                                <Card.Text>
                                    <h3>{tv.original_name.slice(0, 10)}</h3>
                                    <h3>{tv.vote_average}</h3>
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