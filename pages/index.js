import Carousel from "../components/Carousel";
import Movielist from "../components/Movielist";
import Sidemenu from "../components/Sidemenu";
import { getMovies, getCategories } from "../actions";
import { useState } from 'react';


const Home = ({ movies, images, categories }) => {

  const [filter, setFilter] = useState('All');

  const changeCategory = (categoryName) => {
    setFilter(categoryName);
  }

  const filterMovies = (movies) => {
    if(filter === 'All') {
      return movies;
    }
    return movies.filter((m) => {
      return m.genre && m.genre.includes(filter);
    })
  }

  return (
    <div>
      <div className="container fixed">
        <div className="row">
          <div className="col-lg-3">
            <Sidemenu
              changeCategory={changeCategory}
              activeCategory={filter}
              categories={ categories || [] } 
              appName={"Movie DB"}
            />
          </div>
          <div className="col-lg-9">
            <Carousel images={ images || [] } />
            <h1>Displaying {filter} movies</h1>
            <div className="row">
              <Movielist movies={ filterMovies(movies) || [] } />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .fixed {
            margin-bottom: 120px;
          }
        `}
      </style>
    </div>
  );
}

Home.getInitialProps = async () => {
  const movies = await getMovies();
  const images = movies.map((movie) => ({
    id: `image-${movie.id}`,
    url: movie.cover,
    name: movie.name
  }));
  const categories = await getCategories();

  return {
    movies,
    images,
    categories
  };
}

export default Home;
