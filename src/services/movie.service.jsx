import Repository from './repository'
const API_KEY = process.env.REACT_APP_API_THEM_MOVIE_KEY

class MovieService {
    async getPopularMovies() {
        const endpoint = `/movie/popular?api_key=${API_KEY}&page=1`
        const response = await Repository.get(endpoint)
        return response
    }

    async getRateMovies() {
        const endpoint = `/movie/top_rated?api_key=${API_KEY}&page=1`
        const response = await Repository.get(endpoint)
        return response
    }

    async getUpcomingMovies() {
        const endpoint = `/movie/upcoming?api_key=${API_KEY}&page=1`
        const response = await Repository.get(endpoint)
        return response
    }
}

export default new MovieService()