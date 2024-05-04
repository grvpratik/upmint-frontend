import React from "react";
import NavDesktop from "src/components/nav/nav-desktop";
import NavMobile from "src/components/nav/nav-mobile";
import { landingContent as content } from "src/lib/site.info";
const LandingPage = () => {
	return (
		<>
			<NavMobile />
			<NavDesktop />
			<div className="h-screen"></div>
			{/* <main className="flex flex-col py-32 p-4 rounded-lg root-container gap-4 relative ">
				<div className="font-extrabold uppercase text-7xl font-secondary flex flex-col gap-2">
					{Object.entries(content.headings).map(([key, value]) => (
						<span key={key}>{value}</span>
					))}
				</div>
				<p className="text-base text-muted-foreground text-balance max-w-screen-sm">
					{content.description}
				</p>
				<span>
					<button
						className="select-none font-secondary font-bold rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-base text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
					>
						{content.ctaText}
					</button>
				</span>
			</main> */}
		</>
	);
};

export default LandingPage;
