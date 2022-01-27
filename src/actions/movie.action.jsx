import { exceptionConstants, movieConstants } from "../constants";

import { MovieService } from "../services";

const {
  GET_ONCE_POPULAR_MOVIE,
  GET_POPULAR_MOVIE,
  GET_RATED_MOVIE,
  GET_UPCOMING_MOVIE,
} = movieConstants;

const { UNAUTHENTICATED, SUCCESS, CREATED } = exceptionConstants;

export const getPopularMovies = () => {
  return async function (dispatch) {
    const response = await MovieService.getPopularMovies();
    const { code, data } = response;
    if (code === SUCCESS) {
      dispatch({
        type: GET_POPULAR_MOVIE,
        payload: {
          movieList: data.data,
          code: code,
        },
      });
    } else {
      dispatch({
        type: GET_POPULAR_MOVIE,
        payload: {
          movieList: [],
          code: code,
        },
      });
    }
    return response;
  };
};

export const getRateMovies = () => {
  return async function (dispatch) {
    const response = await MovieService.getRateMovies();
    const { code, data } = response;
    if (code === SUCCESS) {
      dispatch({
        type: GET_RATED_MOVIE,
        payload: {
          movieList: data.data,
          code: code,
        },
      });
    } else {
      dispatch({
        type: GET_RATED_MOVIE,
        payload: {
          movieList: [],
          code: code,
        },
      });
    }
    return response;
  };
};

export const getUpcomingMovies = () => {
  return async function (dispatch) {
    const response = await MovieService.getUpcomingMovies();
    const { code, data } = response;
    if (code === SUCCESS) {
      dispatch({
        type: GET_UPCOMING_MOVIE,
        payload: {
          movieList: data.data,
          code: code,
        },
      });
    } else {
      dispatch({
        type: GET_UPCOMING_MOVIE,
        payload: {
          movieList: [],
          code: code,
        },
      });
    }
    return response;
  };
};