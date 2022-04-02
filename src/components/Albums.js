import Album from './Album';

const Albums = (props) => {
	const { albums, handleAdd, handleDelete, handleUpdate } = props;

  return (
		<div className='Albums w-3/4 flex flex-col justify-center items-center gap-4'>
			<div className='w-full px-4 flex justify-between items-center'>
				<h1 className='text-3xl font-bold'>Albums</h1>
				<button className='mt-4 p-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white' onClick={handleAdd}>Add</button>
			</div>
			<ul className='flex flex-wrap justify-evenly items-center gap-4 p-4 border-2 border-blue-500'>
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

