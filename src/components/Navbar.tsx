import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart, AiFillTag } from "react-icons/ai";
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import {  BsFillSaveFill } from 'react-icons/bs';
const Navbar = () => {
	const [isShowDrawer, setIsShowDrawer] = useState(false)
	// 控制 drawer显示/隐藏
	const toggleDrawer = (bool: boolean) => {
		setIsShowDrawer(bool)
	}
	return (
		<>
			<div className='flex justify-between p-4 max-w-7xl mx-auto'>
				{/* Logo */}
				<div className='flex items-center gap-4'>
					<AiOutlineMenu onClick={() => toggleDrawer(true)} className=' cursor-pointer' />
					<h1 className='text-2xl sm:text-3xl lg:text-4xl'>Best<span className='font-bold'>Eats</span></h1>
					<div className='bg-gray-400 py-4 rounded-full'>
						<span className='bg-black text-white p-4 rounded-full'>Delivery</span>
						<span className='p-4'>PickUp</span>
					</div>
				</div>
				{/* Search Input */}
				<div className='flex items-center bg-gray-300 gap-2 rounded-full p-4 w-[200px]  md:w-[300px] lg:w-[400px] '>
					<AiOutlineSearch />
					<input type="text" className=' bg-transparent focus:outline-none w-full' placeholder='search food..' />
					{/* <span>Delivery</span>
				<span>PickUp</span> */}

				</div>
				{/* Cart Button */}
				<button className='bg-black text-white hidden sm:flex items-center rounded-full'>
					<AiOutlineShoppingCart size={25} className='mr-2' />Cart
				</button>
			</div>

			{/* drawer */}
			<div>
				{/* overlay */}
				{isShowDrawer && <div className='fixed left-0 top-0 h-screen w-full bg-black/50' />}
				{/* drawer */}
				<div className={`fixed top-0 w-[300px] h-screen bg-white p-6 ease-in duration-300 ${isShowDrawer ? 'left-0' : 'left-[-300px]'} `}>
					<div className='flex items-center justify-between'>
						<h1 className=' text-xl'>Best<span className=' font-bold'>Eats</span></h1>
						<AiOutlineClose size={20} className=' cursor-pointer' onClick={() => toggleDrawer(false)} />
					</div>
					{/* items */}
					<ul className='mt-10 flex flex-col'>
						<li className='p-4 flex items-center gap-2'><TbTruckDelivery size={20} />Orders</li>
						<li className='p-4 flex items-center gap-2'><MdFavorite size={20} />Favorites</li>
						<li className='p-4 flex items-center gap-2'><FaWallet size={20} />Wallet</li>
						<li className='p-4 flex items-center gap-2'><MdHelp size={20} />Help</li>
						<li className='p-4 flex items-center gap-2'><AiFillTag size={20} />Promotions</li>
						<li className='p-4 flex items-center gap-2'><BsFillSaveFill size={20} />Best One</li>
						<li className='p-4 flex items-center gap-2'><FaUserFriends size={20} />Invite Friends</li>
					</ul>
				</div>
			</div>
		</>

	)
}

export default Navbar