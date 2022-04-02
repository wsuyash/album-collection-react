const Album = (props) => {
	const { userId, id, title, handleDelete, handleUpdate } = props;

  return (
		<li className='Album w-1/5 p-2 grow bg-[rgba(255,255,255,0.8)] rounded'>
			<h1 className='font-bold truncate'>{title}</h1>
			<p>User ID: <b>{userId}</b></p>
			<p>Album ID: <b>{id}</b></p>
			<div className='flex justify-between items-center'>
				<button className='mt-4 px-4 py-2 text-blue-500 border-2 border-blue-500 hover:bg-blue-500 hover:text-white' data-title={title} data-userid={userId} data-albumid={id} onClick={handleUpdate}>Update</button>
				<button className='mt-4 px-4 py-2 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white' id={id} onClick={handleDelete}>Delete</button>
			</div>
		</li>
  );
}

export default Album;

