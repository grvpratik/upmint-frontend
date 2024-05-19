import Image from "next/image";
import React from "react";

const LandingImages = () => {
	return (
		<div className=" -z-40 absolute inset-0  overflow-hidden hidden lg:block">
			<div className="  rounded-3xl overflow-hidden h-28 w-28 aspect-square bg-lime-500 absolute right-0 bottom-0">
				<div className=" relative w-full h-full ">
					<Image src={"/images/1.jpg"} fill alt="landing images for upmint" />
				</div>
			</div>
			<div className="  rounded-3xl overflow-hidden h-28 w-28 bg-blue-500 absolute right-[14rem] -bottom-[1rem]">
				<div className=" relative w-full h-full ">
					<Image src={"/images/2.jpg"} fill alt="landing images for upmint" />
				</div>
			</div>
			<div className="  rounded-3xl overflow-hidden h-28 w-28 bg-orange-500  absolute right-[28rem] -bottom-[2rem]">
				<div className=" relative w-full h-full ">
					<Image src={"/images/3.jpg"} fill alt="landing images for upmint" />
				</div>
			</div>
			<div className="  rounded-3xl overflow-hidden h-28 w-28 bg-orange-500  absolute -right-[1rem] bottom-[10rem]">
				<div className=" relative w-full h-full ">
					<Image src={"/images/4.jpg"} fill alt="landing images for upmint" />
				</div>
			</div>
			<div className="  rounded-3xl overflow-hidden h-28 w-28 bg-orange-500  absolute right-[9rem] bottom-[9rem]">
				<div className=" relative w-full h-full ">
					<Image src={"/images/5.jpg"} fill alt="landing images for upmint" />
				</div>
			</div>
			<div className="  rounded-3xl overflow-hidden h-28 w-28 bg-blue-500 absolute right-[19rem] bottom-[8rem]">
				<div className=" relative w-full h-full ">
					<Image src={"/images/6.jpg"} fill alt="landing images for upmint" />
				</div>
			</div>
			<div className="  rounded-3xl overflow-hidden h-28 w-28 bg-orange-500  absolute -right-[2rem] bottom-[20rem]">
				<div className=" relative w-full h-full ">
					<Image src={"/images/7.jpg"} fill alt="landing images for upmint" />
				</div>
			</div>
			<div className="  rounded-3xl overflow-hidden h-28 w-28 bg-blue-500 absolute right-[8rem] bottom-[19rem]">
				<div className=" relative w-full h-full ">
					<Image src={"/images/9.jpg"} fill alt="landing images for upmint" />
				</div>
			</div>
		</div>
	);
};

export default LandingImages;
