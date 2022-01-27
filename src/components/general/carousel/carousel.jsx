import React, { useEffect, useState } from 'react'

import { chunk } from 'lodash';

const Carousel = (props) => {
    const { type, title, movie } = props

    const [listMovie, setList] = useState([])
    useEffect(()=>{
        if (movie !== undefined && movie.length !== 0){
            setList(movie.results)
        }
    }, [movie])

    const rows = chunk(listMovie, 5)

    const url_poster = process.env.REACT_APP_API_THEM_MOVIE_POSTER_PATH

    return (
        <>
        <div id={type} className="carousel slide" data-bs-ride="carousel">
            <div className='carousel--headline'>
                <h3>{title}</h3>
            </div>

            <div className="carousel-indicators">
            {rows.length == 4 ? rows.map((data, index) => {
                if (index == 0) {
                    return (
                        <button type="button" data-bs-target={"#" + type} data-bs-slide-to={index} className="active"></button>
                    )
                }
                else {
                    return (
                        <button type="button" data-bs-target={"#" + type} data-bs-slide-to={index}></button>
                    )
                }
            }): ''}
            </div>
        
            <div className="carousel-inner">
                {rows.length == 4 ? rows.map((data, index) => {
                    if (index == 0) {
                        return (
                            <div className="carousel-item active" key={index}>
                                <div className="row" key={index}>
                                    {data.map((m, i) => {
                                        console.log(m)
                                        return (
                                            <div className="col" key={i}>
                                                <img src={url_poster + m.poster_path} alt={m.original_title} className="d-block w-100"/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    } else {
                        return (
                            <div className="carousel-item" key={index}>
                                <div className="row" key={index}>
                                    {data.map((m, i) => {
                                        return (
                                            <div className="col" key={i}>
                                                <img src={url_poster + m.poster_path} alt={m.original_title} className="d-block w-100"/>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    }
                }): ''}
            </div>
        
            <button className="carousel-control-prev" type="button" data-bs-target={"#" + type} data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={"#" + type} data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            </button>
        </div>
        </>
    )
}

export default (Carousel)