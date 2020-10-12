import Modal from './Modal';
import MovieCreateForm from './Moviecreateform';
import { createMovie } from '../actions';

const Sidemenu = ({ appName, categories }) => {

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            console.log(JSON.stringify(movies));
        })
    }

    return (
        <div>
            <h1>{appName}</h1>
            <div className="list-group mb-4">
                { categories.map((category) => (
                    <a 
                        href="#" 
                        className="list-group-item"
                        key={category.id}
                    >
                        {category.name}
                    </a>
                ))}
            </div>
            <Modal hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
        </div>
    );
}

export default Sidemenu;