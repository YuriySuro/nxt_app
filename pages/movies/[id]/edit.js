import MovieCreateForm from '../../../components/Moviecreateform';
import { getMovieById } from '../../../actions';

class EditMovie extends React.Component {

    static async getInitialProps({ query }) {
        const movie = await getMovieById(query.id);
        return { movie };
    }

    render() {
        const { movie } = this.props;
        return (
            <div className="container fixed">
                <h1>Edit the Movie</h1>
                <MovieCreateForm initialData={movie} />
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