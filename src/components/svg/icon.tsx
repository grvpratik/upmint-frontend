import * as React from "react";


export function MenuSVG(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth={0}
			viewBox="0 0 20 20"
			aria-hidden="true"
			
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clipRule="evenodd"
				stroke="none"
			/>
		</svg>
	);
}

MenuSVG;
