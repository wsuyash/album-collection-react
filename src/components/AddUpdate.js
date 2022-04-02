const AddUpdate = (props) => {
	const { mode, setMode, addAlbum, updateAlbum, title, setTitle, userId, setUserId, albumId } = props;

	return (
		<div className='AddUpdate fixed top-0 bottom-0 left-0 right-0 mx-auto flex flex-col justify-center items-center z-10 bg-[rgba(0,0,0,0.4)]'>
			<div className='w-min flex flex-col justify-center items-center gap-2 p-4 bg-white'>
				<h1 className='text-2xl font-bold'>{mode}</h1>
				<input className='p-2 border-2 border-gray-500' type='text' minLength="1" placeholder='Title' onChange={(e) => setTitle(() => e.target.value)} value={title} />
				<br />
				<input className='p-2 border-2 border-gray-500' type='number' min="1" placeholder='User ID' onChange={(e) => setUserId(() => e.target.value)} value={userId} />
				<div className='w-full flex justify-between items-center'>
					<button className='mt-4 p-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white' id={albumId} onClick={ mode === 'Add' ? addAlbum : updateAlbum }>{mode}</button>
					<button className='mt-4 p-2 border-2 border-gray-500 hover:bg-gray-500 hover:text-white' onClick={() => setMode(() => "")}>Cancel</button>
				</div>
			</div>
		</div>
	);
}

export default AddUpdate;
