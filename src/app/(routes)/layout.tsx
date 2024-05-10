import React from "react";
import NavDesktop from "src/components/nav/nav-desktop";
import NavMobile from "src/components/nav/nav-mobile";

const ExploreLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<NavMobile />
            <NavDesktop />
            {children}
		</>
	);
};

export default ExploreLayout;
