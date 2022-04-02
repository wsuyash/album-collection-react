const AddUpdate = (props) => {
	const { mode, setMode, addAlbum, updateAlbum, title, setTitle, userId, setUserId, albumId } = props;

	return (
		<div className='AddUpdate flex flex-col justify-center items-center gap-2 p-4 border-2 border-green-500'>
			<h1 className='text-2xl font-bold'>{mode}</h1>
			<input className='p-2 border-2 border-gray-500' type='text' minLength="1" placeholder='Title' onChange={(e) => setTitle(() => e.target.value)} value={title} />
			<br />
			<input className='p-2 border-2 border-gray-500' type='number' min="1" placeholder='User ID' onChange={(e) => setUserId(() => e.target.value)} value={userId} />
			<div className='w-full flex justify-between items-center'>
				<button className='mt-4 p-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white' id={albumId} onClick={ mode === 'Add' ? addAlbum : updateAlbum }>{mode}</button>
				<button className='mt-4 p-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white' onClick={() => setMode(() => "")}>Cancel</button>
			</div>
		</div>
	);
}

export default AddUpdate;
