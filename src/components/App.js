import { useEffect, useState } from 'react';
import Albums from './Albums';
import AddUpdate from './AddUpdate';

const App = () => {
	// States
	const [albums, setAlbums] = useState(() => []);
	const [mode, setMode] = useState(() => "");
	const [title, setTitle] = useState(() => "");
	const [userId, setUserId] = useState(() => "");
	const [albumId, setAlbumId] = useState(() => "");

	// Fetch albums
	const getAlbums = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/albums');	
		const data = await response.json();

		setAlbums(() => data);
	}

	// Get albums on page load
	useEffect(() => {
		getAlbums();
	}, []);


	// Delete an album
	const handleDelete = async (e) => {
		// Get the id of the album to be deleted
		const id = parseInt(e.target.id);

		// Send request to API
		const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
			method: 'DELETE'
		})

		// If the request was successful
		if (response.ok) {
			const newAlbums = albums.filter((album) => album.id !== id );

			setAlbums(() => newAlbums);
		}
	}

	// Setup Add Album
	const handleAdd = () => {
		setMode(() => "Add");
		setTitle(() => "");
		setUserId(() => "");
	}

	// Setup Update Album
	const handleUpdate = (e) => {
		setMode(() => "Update");
		setTitle(() => e.target.dataset.title);
		setUserId(() => e.target.dataset.userid);
		setAlbumId(e.target.dataset.albumid);
	}

	// Add album
	const addAlbum = async () => {
		// If invalid input, return
		if (title.length < 1 || userId < 1) {
			return;
		}

		// Send request to API
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

		// Get data from response
		const data = await response.json();

		// Add new album to the top
		const newAlbums = [data, ...albums];

		// Set appropriate states
		setAlbums(() => newAlbums);
		setMode(() => "");
	}

	// Update album
	const updateAlbum = async () => {
		// If invalid input, return
		if (title.length < 1 || userId < 1) {
			return;
		}

		// Send request to API
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

		// Get data from the response
		const data = await response.json();

		// Replace the old album with new album
		albums.splice(parseInt(albumId) - 1, 1, data);

		// Set appropriate states
		setAlbums(() => albums);
		setMode(() => "");
	}

  return (
		<div className='App w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#8e2de2] to-[#4a00e0]'>
			{	mode === 'Add' || mode === 'Update' ? <AddUpdate mode={mode} setMode={setMode} addAlbum={addAlbum} updateAlbum={updateAlbum} title={title} setTitle={setTitle} userId={userId} setUserId={setUserId} albumid={albumId} /> : '' }
			<Albums albums={albums} handleAdd={handleAdd} handleDelete={handleDelete} handleUpdate={handleUpdate} />
		</div>
  );
}

export default App;
