"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface Props {
	route: string;
	text: string;
}

const ButtonVot = ({ route, text }: Props) => {
	const router = useRouter();
	return (
		<button
			className="w-full h-12 rounded-xl text-lg  md:h-12 md:w-[50%] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  bg-default-white my-3 font-semibold text-primary hover:bg-primary hover:text-default-white"
			onClick={() => router.push(route)}
		>
			{text}
		</button>
	);
};

export default ButtonVot;