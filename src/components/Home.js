import { useEffect, useState } from 'react';
import Albums from './Albums';

const Home = () => {
	const [albums, setAlbums] = useState(() => []);

	const getAlbums = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/albums');	
		const data = await response.json();

		setAlbums(() => data);
	}

	useEffect(() => {
		getAlbums();
	}, []);


	const handleDelete = async (e) => {
		const id = e.target.id;

		const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
			method: 'DELETE'
		})

		if (response.ok) {
			const newAlbums = albums.filter((album) => album.id != id );

			setAlbums(() => newAlbums);
		}
	}

	return (
		<div className='Home border-2 border-blue-500'>
			<h1>This is Home.</h1>
			<Albums albums={albums} handleDelete={handleDelete} />
		</div>
	);
}

export default Home;
