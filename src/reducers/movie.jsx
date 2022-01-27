import { movieConstants } from "../constants";

const {
  GET_ONCE_POPULAR_MOVIE,
  GET_POPULAR_MOVIE,
  GET_RATED_MOVIE,
  GET_UPCOMING_MOVIE,
} = movieConstants;

const initialState = {
  moviePopularList: [],
  movieRateList: [],
  movieUpcomingList: [],
  movie: null,
  codeP: null,
  codeR: null,
  codeU: null,
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIE:
      return {
        ...state,
        moviePopularList: action.payload.movieList,
        codeP: action.payload.code,
      };
    case GET_RATED_MOVIE:
      return {
        ...state,
        movieRateList: action.payload.movieList,
        codeR: action.payload.code,
      };
    case GET_UPCOMING_MOVIE:
      return {
        ...state,
        movieUpcomingList: action.payload.movieList,
        codeU: action.payload.code,
      };
    case GET_ONCE_POPULAR_MOVIE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default movie;
