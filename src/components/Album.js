const Album = (props) => {
	const { userId, id, title, handleDelete, handleUpdate } = props;

  return (
		<li className='Album w-1/5 p-2 grow border-2 border-orange-500'>
			<h1 className='font-bold truncate'>{title}</h1>
			<p>User ID: <b>{userId}</b></p>
			<p>Album ID: <b>{id}</b></p>
			<div className='flex justify-between items-center'>
				<button className='mt-4 p-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white' data-title={title} data-userid={userId} data-albumid={id} onClick={handleUpdate}>Update</button>
				<button className='mt-4 p-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white' id={id} onClick={handleDelete}>Delete</button>
			</div>
		</li>
  );
}

export default Album;

