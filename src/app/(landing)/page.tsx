import React from "react";
import NavDesktop from "src/components/nav/nav-desktop";
import NavMobile from "src/components/nav/nav-mobile";

const LandingPage = () => {
	return (
		<>
      <NavMobile />
      <NavDesktop/>
		</>
	);
};

export default LandingPage;
