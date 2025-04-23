import Header from "@/components/header"

const Home = () => {
	return (
		<>
    <Header />
			<div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
				{/* Section 1 */}
				<div className="col-span-1 row-span-1 bg-red-100">Section 1</div>

				{/* Section 2 */}
				<div className="col-span-2 row-span-1 bg-blue-100">Section 2</div>

				{/* Section 3 - under Section 1 */}
				<div className="col-span-1 row-span-1 bg-green-100">Section 3</div>

				{/* Section 4 - under left half of Section 2 */}
				<div className="col-span-1 row-span-1 bg-yellow-100">Section 4</div>

				{/* Section 5 - under right half of Section 2 */}
				<div className="col-span-1 row-span-1 bg-purple-100">Section 5</div>
			</div>
		</>
	)
}

export default Home
