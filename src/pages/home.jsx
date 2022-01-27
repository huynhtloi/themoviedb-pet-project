import React, {useEffect, useState} from 'react'

import { Sidebar, Carousel } from '../components/general'
import { Banner } from '../components/home'

import { getPopularMovies, getUpcomingMovies, getRateMovies } from '../actions/movie.action'

import { connect } from 'react-redux'

const Home = (props) => {
    const { movie, getPopularMovies, getUpcomingMovies, getRateMovies } = props

    const [popularList, setPopularList] = useState([])
    const [rateList, setRateList] = useState([])
    const [upcomingList, setUpcomingList] = useState([])

    useEffect(async () => {
        await getPopularMovies()
        await getUpcomingMovies()
        await getRateMovies()
    }, [])

    useEffect(()=>{
        if (movie.codeP !== null){
            setPopularList(movie.moviePopularList)
        }
        if (movie.codeR !== null){
            setRateList(movie.movieRateList)
        }
        if (movie.codeU !== null){
            setUpcomingList(movie.movieUpcomingList)
        }
    }, [movie.moviePopularList, movie.movieRateList, movie.movieUpcomingList])

    return (
        <div className="home-page">
            <Sidebar />
            <Banner movies={popularList}/>
            <div className='container carousel-block'>
                <Carousel type='popular' title='top popular movies' movie={popularList}/>
                <Carousel type='rated' title='top rated movies' movie={rateList}/>
                <Carousel type='upcoming' title='upcoming movies' movie={upcomingList}/>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPopularMovies: () => dispatch(getPopularMovies()),
        getRateMovies: () => dispatch(getRateMovies()),
        getUpcomingMovies: () => dispatch(getUpcomingMovies()),
    }
}

const mapStateToProps = (state) => ({
    movie: state.movie,
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)