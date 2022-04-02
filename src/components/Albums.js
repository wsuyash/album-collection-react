import Album from './Album';

const Albums = (props) => {
	const { albums, handleAdd, handleDelete, handleUpdate } = props;

  return (
		<div className='Albums w-3/4 flex flex-col justify-center items-center gap-4 m-8'>
			<div className='w-full px-4 flex justify-between items-center'>
				<h1 className='text-3xl text-white font-bold'>Albums</h1>
				<button className='mt-4 px-4 py-2 text-white bg-green-500 hover:bg-green-600 hover:text-white' onClick={handleAdd}>Add</button>
			</div>
			<ul className='flex flex-wrap justify-evenly items-center gap-4 p-4'>
				{
					albums.map((album) => (
						<Album userId={album.userId} id={album.id} title={album.title} key={album.id} handleDelete={handleDelete} handleUpdate={handleUpdate} />
			 		))
			 	}
			</ul>
		</div>
  );
}

export default Albums;

