import React, {useEffect, useState} from 'react'

const Banner = (props) => {
    const {movies} = props

    const [movie, setMovie] = useState(null)
    useEffect(()=>{
        if (movies !== undefined && movies.length !== 0){
            setMovie(movies.results[0])
        }
    }, [movies])

    const url_poster = process.env.REACT_APP_API_THEM_MOVIE_POSTER_PATH
    return (
        <div className='banner'>
            <div className='banner--background' style={{backgroundImage: `url(${movie ? url_poster + movie.poster_path : '/default.jpg'})`}}>
                <div className='banner--content'>
                    {movie ?
                        <>
                            <h1 className='banner--content__headline'>
                                {movie.original_title}
                            </h1>
                            <div className='banner--content__title'>
                                {movie.overview}
                            </div>
                        </>
                    :''}
                </div>
            </div>
        </div>
    )
}

export default (Banner)