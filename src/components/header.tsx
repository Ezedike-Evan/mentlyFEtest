import { IoIosNotificationsOutline } from 'react-icons/io'
import { FaAngleDown } from "react-icons/fa6"
import Image from 'next/image'
const Header = () => {
	return (
		<header>
			<section className="flex justify-end py-4 px-13 gap-11 items-center">
				<div className="relative">
					<IoIosNotificationsOutline size={24} />
					<div className="w-2 h-2 bg-[#FF3E3E] rounded absolute top-[2px] right-1"></div>
				</div>
				<div className='flex items-center gap-4'>
					<div className="flex gap-2 items-center">
						<div className="w-11 h-11 rounded-full bg-[#8B72FC] flex justify-center items-center">
							<Image
								src="/hand-logo.png"
								width={26}
								height={32}
								alt="logo"
							/>
						</div>
						<div>
							<p className="text-sm">Techrity Foun...</p>
							<p className="text-xs text-[#53547B]">Member</p>
						</div>
					</div>
					<div className='relative bg-[#6F01D0] w-[19px] h-[18px] rounded-sm'>
						<FaAngleDown size={16} color='#C2C2C2' className='absolute right-[-1px] bottom-[-8px]'/>
					</div>
				</div>
			</section>
			<section></section>
			<section></section>
		</header>
	)
}

export default Header
