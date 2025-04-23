import { IoIosNotificationsOutline } from 'react-icons/io'
const Header = () => {
	return (
		<header>
			<section className="flex justify-end py-4 px-13">
				<div className='relative'>
					<IoIosNotificationsOutline size={24} />
					<div className='w-2 h-2 bg-[#FF3E3E] rounded absolute top-[2px] right-1'></div>
				</div>
			</section>
			<section></section>
			<section></section>
		</header>
	)
}

export default Header
