import Album from './Album';

const Albums = (props) => {
	const { albums, handleDelete } = props;

  return (
		<div className='Albums border-2 border-green-500'>
		 {
			 albums.map((album) => (
				 <Album userId={album.userId} id={album.id} title={album.title} key={album.id} handleDelete={handleDelete} />
			 ))
		 }
		</div>
  );
}

export default Albums;

