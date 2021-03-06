import Modal from './Modal';
import MovieCreateForm from './Moviecreateform';
import { createMovie } from '../actions';
import { useRouter } from 'next/router';

const Sidemenu = ({ appName, categories, changeCategory, activeCategory }) => {

    let modal = null;
    const router = useRouter();

    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {
            modal.closeModal();
            router.push('/', '/');
        });
    }

    return (
        <div>
            <h1>{appName}</h1>
            <div className="list-group mb-4">
                { categories.map((category) => (
                    <a 
                        href="#" 
                        className={`list-group-item ${activeCategory === category.name ? 'active' : ''}`}
                        key={category.id}
                        onClick={() => changeCategory(category.name)}
                    >
                        {category.name}
                    </a>
                ))}
            </div>
            <Modal ref={(elem) => modal=elem} hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
        </div>
    );
}

export default Sidemenu;