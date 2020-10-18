import React from "react";
import Link from 'next/link';

class Movielist extends React.Component {

    shorten = (text) => {
        return text.substr(0, 60) + '...';
    }

    render() {
        const {movies} = this.props;
    
        return (
            <>
                { movies.map(movie => {
                    return (
                        <div className="col-lg-4 col-md-6 mb-4" key={movie.id} >
                            <div className="card h-100">
                               <Link href={'/movies/[id]/'} as={`/movies/${movie.id}/`} >
                                    <a><img className="card-img-top" src={movie.image} alt={movie.name} /></a>
                                </Link>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <Link href={'/movies/[id]/'} as={`/movies/${movie.id}/`} >
                                            <a>{movie.name}</a>
                                        </Link>
                                    </h4>
                                    <p className="movie-genre">{movie.genre}</p>
                                    <p className="card-text">{this.shorten(movie.description)}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{movie.rating}  &#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default Movielist;

// &#9733; &#9733; &#9733; &#9733; &#9734;