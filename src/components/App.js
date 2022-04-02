import { useEffect, useState } from 'react';
import Albums from './Albums';
import AddUpdate from './AddUpdate';

const App = () => {
	const [albums, setAlbums] = useState(() => []);
	const [mode, setMode] = useState(() => "");
	const [title, setTitle] = useState(() => "");
	const [userId, setUserId] = useState(() => "");
	const [albumId, setAlbumId] = useState(() => "");

	const getAlbums = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/albums');	
		const data = await response.json();

		setAlbums(() => data);
	}

	useEffect(() => {
		getAlbums();
	}, []);


	const handleDelete = async (e) => {
		const id = parseInt(e.target.id);

		const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
			method: 'DELETE'
		})

		if (response.ok) {
			const newAlbums = albums.filter((album) => album.id !== id );

			setAlbums(() => newAlbums);
		}
	}

	const handleAdd = () => {
		setMode(() => "Add");
		setTitle(() => "");
		setUserId(() => "");
	}

	const handleUpdate = (e) => {
		setMode(() => "Update");
		setTitle(() => e.target.dataset.title);
		setUserId(() => e.target.dataset.userid);
		setAlbumId(e.target.dataset.albumid);
	}

	const addAlbum = async () => {
		if (title.length < 1 || userId < 1) {
			return;
		}

		const response = await fetch('https://jsonplaceholder.typicode.com/albums', {
			method: 'POST',
			body: JSON.stringify(
				{
					title,
					userId,
				}
			),
			headers:
				{
					'Content-type': 'application/json; charset=UTF-8',
				}
		});

		const data = await response.json();
		const newAlbums = [data, ...albums];

		setAlbums(() => newAlbums);
		setMode(() => "");
	}

	const updateAlbum = async () => {
		if (title.length < 1 || userId < 1) {
			return;
		}

		const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
			method: 'PUT',
			body: JSON.stringify({
				title,
				userId,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			}
		});

		const data = await response.json();

		albums.splice(parseInt(albumId) - 1, 1, data);
		setAlbums(() => albums);
		setMode(() => "");
	}

  return (
		<div className='App w-full flex flex-col justify-center items-center p-4 border-2 border-red-500'>
			{	mode === 'Add' || mode === 'Update' ? <AddUpdate mode={mode} setMode={setMode} addAlbum={addAlbum} updateAlbum={updateAlbum} title={title} setTitle={setTitle} userId={userId} setUserId={setUserId} albumid={albumId} setAlbumId={setAlbumId} /> : '' }
			<Albums albums={albums} handleAdd={handleAdd} handleDelete={handleDelete} handleUpdate={handleUpdate} />
		</div>
  );
}

export default App;
