import type { Metadata } from 'next'
import './globals.css'
import Sidebar from '@/components/sidebar'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body>
				<div className="flex">
					<Sidebar />
					<main className="ml-[240px] w-screen h-full bg-[#F4F5FA]">{children}</main>
				</div>
			</body>
		</html>
	)
}
