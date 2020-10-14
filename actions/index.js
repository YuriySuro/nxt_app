import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getMovies = () => {
  /* return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIE_DATA);
      // reject('Cannot fetch data!');
    }, 50);
  }); */

  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
}

export const getMovieById = (id) => {

  return axios.post(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);

  /* return new Promise((resolve, reject) => {
    const movieIndex = MOVIE_DATA.findIndex(m => m.id === id);
    const movie = MOVIE_DATA[movieIndex];
    setTimeout(() => { resolve(movie), 50} );
  }); */
}

export const createMovie = (movie) => {
  /* return new Promise((resolve, reject) => {
    movie.id = Math.random().toString(36).substr(2, 7);
    MOVIE_DATA.push(movie);
    setTimeout(() => {
      resolve(MOVIE_DATA);
    }, 50)
  }); */
  movie.id = Math.random().toString(36).substr(2, 7);

  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data);
}

export const deleteMovie = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
}


const CATEGORY_DATA = [
  {
    id: 'c-1',
    name: 'Drama'
  },
  {
    id: 'c-2',
    name: 'Action'
  },
  {
    id: 'c-3',
    name: 'Adventure'
  },
  {
    id: 'c-4',
    name: 'Fantasy'
  }
];

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      // reject('Cannot fetch data!');
    }, 50);
  });
}