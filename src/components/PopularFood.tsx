import React, { useState, useEffect } from 'react'
import { data } from '../utils/data'
import Food from './Food'
import { foodProps } from '../utils/type'
const PopularFood = () => {
	const filterTypes = ['All', 'burger', 'pizza', 'salad', 'chicken']
	const filterPrices = ['$', '$$', '$$$', '$$$$']
	const [currentType, setCurrentType] = useState('All')
	const [currentSelected, setCurrentSelected] = useState('')
	const [currentData, setCurrentData] = useState<foodProps[]>([])
	useEffect(() => {
		if (currentType === 'All') {
			setCurrentData(data)
		} else {
			setCurrentData(data.filter(item => item.category === currentType))
		}
		console.log('currentData', currentData);

	}, [currentType]);


	return (
		<div className='max-w-7xl mx-auto'>
			<h1 className=' text-center text-3xl text-orange-500 font-bold'>Top Rated Menu Items</h1>
			<div>
				<h4>Filter Type</h4>
				<div className=' flex justify-between'>
					{
						filterTypes.map(item => <button key={item} onClick={() => setCurrentType(item)} className={`border-orange-500 hover:text-white hover:bg-orange-500 ${currentType === item ? 'text-white bg-orange-500' : 'text-orange-500 '}`}>{item}</button>)
					}
				</div>
				<h4>Filter Price</h4>
				<div className=' flex gap-8'>
					{
						filterPrices.map(item => <button key={item} className='text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500'>{item}</button>)
					}
				</div>

				{/* Food */}
				<div className='grid md:grid-cols-2 gap-8 my-4'>
					{
						currentData.map(item => (
							<Food key={item.id} foodData={item} />
						))
					}
				</div>


			</div>
		</div>
	)
}

export default PopularFood