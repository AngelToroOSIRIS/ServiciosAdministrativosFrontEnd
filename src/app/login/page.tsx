"use client"

import Login from "@/components/pages/Login";

export default function Index({ searchParams }: any) {
	return (
		<main>
			<Login searchParams={searchParams} />
			
		</main>
	);
}
