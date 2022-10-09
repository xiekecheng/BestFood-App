import React from 'react'

const FoodCard = () => {
	return (
		<div className=' relative rounded-xl overflow-hidden max-h-[160px]'>
			{/* overlay */}
			<div className=' absolute w-full h-full rounded-xl  p-4 bg-black/20 text-white'>
				<p className=' font-bold text-2xl'>Lorem, ipsum dolor.</p>
				<p className='py-4'>Lorem, ipsum.</p>
				<button className=' bg-white text-black border-white'>Order Now</button>
			</div>
			<img className=' w-full max-h-[160px] object-cover' src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
		</div>
	)
}

export default FoodCard