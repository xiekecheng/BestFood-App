import React from 'react'
import { categories } from '../utils/data'
const Category = () => {
	return (
		<div className='max-w-7xl mx-auto my-10'>
			<h1 className=' text-center text-3xl text-orange-500 font-bold py-6'>Top Rated Menu Items</h1>
			<div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
				{
					categories.map(item => {
						const { id, name, image } = item
						return (
							<div key={id} className='flex justify-between bg-gray-100 items-center p-4 rounded-xl'>
								<h1 className='text-3xl'>{name}</h1>
								<img src={image} alt={name} />
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Category