import { IoIosNotificationsOutline } from 'react-icons/io'
import { FaAngleDown } from 'react-icons/fa6'
import Image from 'next/image'
const Header = () => {
	return (
		<header>
			<section className="flex justify-end py-4 px-2 gap-11 items-center">
				<div className="relative">
					<IoIosNotificationsOutline size={24} />
					<div className="w-2 h-2 bg-[#FF3E3E] rounded absolute top-[2px] right-1"></div>
				</div>
				<div className="flex items-center gap-4">
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
					<div className="relative bg-[#6F01D0] w-[19px] h-[18px] rounded-sm">
						<FaAngleDown
							size={16}
							color="#C2C2C2"
							className="absolute right-[-1px] bottom-[-8px]"
						/>
					</div>
				</div>
			</section>
			<section className="flex justify-end gap-5 py-[18px] items-center">
				<Image
					src="/thumbnail-1.png"
					width={24}
					height={24}
					alt="thumbnail"
				/>
				<Image
					src="/thumbnail-2.png"
					width={30}
					height={26}
					alt="thumbnail"
				/>
				<h6 className="text-4 font-bold text-[#1F0954]">Manage Widgets</h6>
			</section>
			<section className="flex items-center justify-between bg-[#6F01D0] py-2 px-7 rounded-sm">
				<p className='text-white text-2xl font-semibold'>Welcome Aboard, Blessing 👋</p>
				<p className='text-[#BDBDBD] text-5 font-semibold'>We're thrilled to have you join Techrity Team!</p>
				<div className="px-6 bg-white py-2.5 rounded-lg">
					<h6 className="text-4 font-bold text-[#1F0954]">Manage Widgets</h6>
				</div>
			</section>
		</header>
	)
}

export default Header
