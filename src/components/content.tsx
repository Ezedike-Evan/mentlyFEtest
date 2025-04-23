import ProgramsSection from "./programsSections";

const MainContent = () => {
	return (
		<main className="grid grid-cols-3 gap-4 py-2 px-9">
			<section className="col-span-1 row-span-2 py-2 px-2.5 bg-white rounded-xl">
				<ProgramsSection />
			</section>
			<section className="col-span-2 row-span-1 bg-blue-100 rounded-md">
				Section 2
			</section>
			<section className="col-span-1 row-span-1 bg-green-100 rounded-md">
				Section 3
			</section>
            <section className="col-span-1 row-span-2 bg-yellow-100 rounded-md">
				Section 4
			</section>
			<section className="col-span-1 row-span-2 bg-purple-100 rounded-md">
				Section 5
			</section>
		</main>
	);
};

export default MainContent;
