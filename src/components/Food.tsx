import React from 'react'
import { foodProps } from '../utils/type'
type foodDataProps = {
	foodData: foodProps
}
const Food = ({ foodData }: foodDataProps) => {
	const { name, image, price } = foodData
	return (
		<div className=' rounded-xl overflow-hidden w-full  shadow shadow-gray-300'>
			<div className=' max-h-[300px]'>
				<img className=' w-full max-h-[300px] object-cover' src={image} alt={name} />
			</div>
			<div className='flex justify-between items-center p-4'>
				<h1 className=' font-bold'>{name}</h1>
				<span className=' rounded-full text-white bg-orange-400 p-2'>{price}</span>
			</div>
		</div>
	)
}

export default Food