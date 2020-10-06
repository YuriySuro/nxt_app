import Head from "next/head";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Movielist from "../components/Movielist";
import Navbar from "../components/Navbar";
import Sidemenu from "../components/Sidemenu";
import getMovies from '../actions';


const Home = () => {
  const movies = getMovies();
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossOrigin="anonymous" />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidemenu 
                appName={"Movie DB"}
              />
            </div>
            <div className="col-lg-9">
              <Carousel />
              <div className="row">
                <Movielist movies={movies} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .home-page {
            margin-top: 80px;
          }
        `}
      </style>
    </div>
  );
}


export default Home;
