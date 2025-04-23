'use client'
import { ReactElement } from 'react'
import { RiHome5Line, RiBubbleChartLine } from 'react-icons/ri'
import { LuBookText, LuClipboardList } from 'react-icons/lu'
import { FaRegUser } from 'react-icons/fa'
import { IoWalletOutline, IoSettingsOutline } from 'react-icons/io5'
import { FaAward, FaChartLine } from 'react-icons/fa6'
import { BiLogOut, BiUserPin } from 'react-icons/bi'
import Image from 'next/image'
import { useState } from 'react'

type NavItem = {
	name: string
	icon?: ReactElement
}

const iconSize = 20
const navItems: NavItem[] = [
	{ name: 'Dashboard', icon: <RiHome5Line size={iconSize} /> },
	{ name: 'Programs', icon: <LuBookText size={iconSize} /> },
	{ name: 'Activities', icon: <RiBubbleChartLine size={iconSize} /> },
	{ name: 'Users', icon: <FaRegUser size={iconSize} /> },
	{ name: 'Forums', icon: <LuClipboardList size={iconSize} /> },
	{ name: 'Finances', icon: <IoWalletOutline size={iconSize} /> },
	{ name: 'Rewards', icon: <FaAward size={iconSize} /> },
	{ name: 'Analytics', icon: <FaChartLine size={iconSize} /> },
	{ name: 'Settings', icon: <IoSettingsOutline size={iconSize} /> },
]

const Sidebar = () => {
	const [enabled, setEnabled] = useState(true)
	return (
		<aside
			className="h-screen w-[240px] bg-[#340260] text-[#C2C2C2] fixed p-4 overflow-y-auto hide-scrollbar"
			role="navigation"
			aria-label="Sidebar"
		>
			<div className="fixed flex justify-between top-0 left-0 w-[240px] py-[36px] pr-3 pl-[36px] bg-[#340260] z-2">
				<Image
					src={'/logo.png'}
					width={116}
					height={27}
					alt="logo"
				/>
				<Image
					src={'/grid-4.png'}
					width={24}
					height={24}
					alt="grid-4"
				/>
			</div>
			<nav className="flex flex-col mt-[100px] gap-2">
				{navItems.map(({ name, icon }) => {
					const isActive = name === 'Dashboard'
					const iscomingsoon = name === 'Analytics'
					return (
						<li
							key={name}
							className={`relative flex gap-8 px-8 py-4 rounded-lg cursor-pointer ${
								isActive
									? 'bg-white text-[#1F0954]'
									: 'hover:bg-white hover:text-[#1F0954]'
							}`}
						>
							{icon}
							<p>{name}</p>
							{iscomingsoon && (
								<p className="absolute top-1 right-2 px-1 py-[2px] text-[10px] bg-[#0214BD38] rounded-full">
									Coming Soon
								</p>
							)}
						</li>
					)
				})}
				<span className="flex gap-8 px-8 py-4 rounded-lg cursor-pointer hover:bg-white hover:text-[#1F0954]">
					<BiLogOut size={iconSize} />
					<p>Log out</p>
				</span>
			</nav>
			<div className="flex flex-col bg-[#FFFFFF1F] py-[10px] px-[15px] rounded-lg gap-[21px]">
				<BiUserPin
					size={iconSize + 10}
					color="white"
				/>
				<h6 className="text-white font-bold text-xs">
					Got some questions, enquiries or need help?
				</h6>
				<p className="text-xs text-[#F0C074] border-b inline self-start">
					Visit Mently Help Desk Here
				</p>
			</div>
			<div className='flex mt-8 justify-between'>
				<p className='text-[14px] font-bold'>Switch to Classic Mode</p>
				<button
					onClick={() => setEnabled(!enabled)}
					className={`w-10 h-6 rounded-full relative transition-colors duration-300 ${
						enabled ? 'bg-gray-200' : 'bg-[#340260]'
					}`}
				>
					<span
						className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-300 
						${enabled ? 'translate-x-4 bg-[#1F0954]' : 'translate-x-0 bg-gray-100'}`}
					/>
				</button>
			</div>
		</aside>
	)
}

export default Sidebar
