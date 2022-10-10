import React from 'react'

const PopularFood = () => {
	const filterTypes = ['All', 'Burgers', 'Pizza', 'Salad', 'chicken']
	const filterPrices = ['$', '$$', '$$$', '$$$$']
	return (
		<div className='max-w-7xl mx-auto'>
			<h1 className=' text-center text-3xl text-orange-500 font-bold'>Top Rated Menu Items</h1>
			<div>
				<h4>Filter Type</h4>
				<div className=' flex justify-between'>
					{
						filterTypes.map(item => <button className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>{item}</button>)
					}
				</div>
				<h4>Filter Price</h4>
				<div className=' flex gap-8'>
					{
						filterPrices.map(item => <button className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>{item}</button>)
					}
				</div>

			</div>
		</div>
	)
}

export default PopularFood