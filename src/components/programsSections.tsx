import { IoMenuOutline } from 'react-icons/io5'
import { BsThreeDotsVertical } from 'react-icons/bs'
const ProgramsSection = () => {
	return (
		<>
			<header className="flex justify-between items-center">
				<div className="flex gap-3 items-center">
					<IoMenuOutline size={16} />
					<p className="text-base font-bold text-[#B0B0B0]">Programs</p>
				</div>
				<div className='flex gap-3 items-center'>
					<p className='text-xs text-[#6F01D0] font-semibold'>See all</p>
					<BsThreeDotsVertical size={18}/>
				</div>
			</header>
		</>
	)
}

export default ProgramsSection
