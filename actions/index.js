import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getMovies = () => {
  return axios.get(`${BASE_URL}/api/v1/movies`).then(res => res.data);
}

export const getMovieById = (id) => {
  return axios.post(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
}

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 7);
  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res => res.data);
}

export const updateMovie = (movie) => {
  return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then(res => res.data);
}

export const deleteMovie = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data);
}

const CATEGORY_DATA = [
  {
    id: 'c-0',
    name: 'All'
  },
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

export const getPosts = () => {
  return axios.get(`${BASE_URL}/api/v1/posts`).then(res => res.data);
}