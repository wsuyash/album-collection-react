const Album = (props) => {
	const { userId, id, title, handleDelete } = props;

  return (
		<div className='Album border-2 border-orange-500'>
			<ul>
				<li className='p-4 m-4 border-2 border-pink-500'>
					<p>{id}</p>
					<p>{userId}</p>
					<p>{title}</p>
					<button className='p-2 my-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white' id={id} onClick={handleDelete}>Delete</button>
				</li>	
			</ul>
		</div>
  );
}

export default Album;

