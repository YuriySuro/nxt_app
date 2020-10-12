import Carousel from "../components/Carousel";
import Movielist from "../components/Movielist";
import Sidemenu from "../components/Sidemenu";
import { getMovies, getCategories } from "../actions";


const Home = ({ movies, images, categories }) => {
 
  return (
    <div>
      <div className="container fixed">
        <div className="row">
          <div className="col-lg-3">
            <Sidemenu
              categories={ categories || [] } 
              appName={"Movie DB"}
            />
          </div>
          <div className="col-lg-9">
            <Carousel images={ images || [] } />
            <div className="row">
              <Movielist movies={ movies || [] } />
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
