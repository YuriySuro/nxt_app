import MovieCreateForm from '../../../components/Moviecreateform';
import { getMovieById, updateMovie } from '../../../actions';
import Router from 'next/router';

class EditMovie extends React.Component {

    static async getInitialProps({ query }) {
        const movie = await getMovieById(query.id);
        return { movie };
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {
            Router.push('/movies/[id]', `/movies/${movie.id}`);
        });
    }

    render() {
        const { movie } = this.props;
        return (
            <div className="container fixed">
                <h1>Edit the Movie</h1>
                <MovieCreateForm 
                    initialData={movie}
                    handleFormSubmit={this.handleUpdateMovie}
                    submitBtn="Update"
                />
                <style jsx>
                    {`
                        .fixed {
                            margin-bottom: 130px;
                        }
                    `}
                </style>
            </div>
        )
    }
}

export default EditMovie;