import React from 'react'
import FoodCard from './FoodCard'

const HeadlineCards = () => {
	return (
		<div className='max-w-7xl mx-auto grid md:grid-cols-3 my-8 gap-4'>
			<FoodCard />
			<FoodCard />
			<FoodCard />
		</div>
	)
}

export default HeadlineCards