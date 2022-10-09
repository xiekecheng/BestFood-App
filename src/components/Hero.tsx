import React from 'react'

const Hero = () => {
	return (
		<div className='max-w-7xl mx-auto'>
			<div className=' relative max-h-[400px]'>
				<div className=' absolute flex flex-col justify-center w-full h-full px-4 bg-black/40'>
					<h1 className=' text-3xl font-bold text-white'>The<span className=' text-orange-400'>Best</span></h1>
					<h1 className=' text-3xl font-bold text-white'>Foods<span className=' text-orange-400'>Delivered</span></h1>
				</div>
				<img className=' max-h-[400px] w-full object-cover' src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="image" />
			</div>
		</div>
	)
}

export default Hero