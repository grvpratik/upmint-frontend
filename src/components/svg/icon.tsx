import * as React from "react";

export function MenuSVG(
	props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
export function FireSVG(
	props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			{...props}
		>
			<path
				fill="currentColor"
				d="M12.832 21.801c3.126-.626 7.168-2.875 7.168-8.69 0-5.291-3.873-8.815-6.659-10.434-.617-.36-1.341.113-1.341.828v1.828c0 1.442-.606 4.074-2.29 5.169-.86.559-1.79-.278-1.894-1.298l-.086-.838c-.1-.974-1.092-1.565-1.87-.971C4.461 8.46 3 10.33 3 13.11c0 7.111 5.289 8.89 7.933 8.89.154 0 .316-.006.484-.015C10.111 21.874 8 21.064 8 18.444c0-2.05 1.495-3.435 2.631-4.11.306-.18.663.055.663.41v.59c0 .45.175 1.155.59 1.637.47.546 1.159-.026 1.214-.744.018-.226.246-.37.442-.256.641.375 1.46 1.175 1.46 2.473 0 2.048-1.129 2.99-2.168 3.357z"
			></path>
		</svg>
	);
}
export function StarsSVG(
	props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			
			className="bi bi-stars"
			fill="currentColor"
			viewBox="0 0 16 16"
			{...props}
		>
			<path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 001.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 00-1.828 1.829l-.645 1.936a.361.361 0 01-.686 0l-.645-1.937a2.89 2.89 0 00-1.828-1.828l-1.937-.645a.361.361 0 010-.686l1.937-.645a2.89 2.89 0 001.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 01.412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 010 .412l-1.162.387A1.734 1.734 0 004.593 5.69l-.387 1.162a.217.217 0 01-.412 0L3.407 5.69A1.734 1.734 0 002.31 4.593l-1.162-.387a.217.217 0 010-.412l1.162-.387A1.734 1.734 0 003.407 2.31l.387-1.162zM10.863.099a.145.145 0 01.274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 010 .274l-.774.258a1.156 1.156 0 00-.732.732l-.258.774a.145.145 0 01-.274 0l-.258-.774a1.156 1.156 0 00-.732-.732L9.1 2.137a.145.145 0 010-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path>
		</svg>
	);
}

export function BitcoinSVG(
	props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			shapeRendering="geometricPrecision"
			textRendering="geometricPrecision"
			imageRendering="optimizeQuality"
			fillRule="evenodd"
			clipRule="evenodd"
			viewBox="0 0 4091.27 4091.73"
			{...props}
		>
			<g fillRule="nonzero">
				<path
					fill="#F7931A"
					d="M4030.06 2540.77C3756.82 3636.78 2646.74 4303.79 1550.6 4030.48 454.92 3757.24-212.09 2647.09 61.27 1551.17c273.12-1096.13 1383.2-1763.19 2479-1489.95C3636.33 334.46 4303.3 1444.73 4030.03 2540.79l.02-.02z"
				/>
				<path
					fill="#fff"
					d="M2947.77 1754.38c40.72-272.26-166.56-418.61-450-516.24l91.95-368.8-224.5-55.94-89.51 359.09c-59.02-14.72-119.63-28.59-179.87-42.34L2186 768.69l-224.36-55.94-92 368.68c-48.84-11.12-96.81-22.11-143.35-33.69l.26-1.16-309.59-77.31-59.72 239.78s166.56 38.18 163.05 40.53c90.91 22.69 107.35 82.87 104.62 130.57l-104.74 420.15c6.26 1.59 14.38 3.89 23.34 7.49-7.49-1.86-15.46-3.89-23.73-5.87l-146.81 588.57c-11.11 27.62-39.31 69.07-102.87 53.33 2.25 3.26-163.17-40.72-163.17-40.72l-111.46 256.98 292.15 72.83c54.35 13.63 107.61 27.89 160.06 41.3l-92.9 373.03 224.24 55.94 92-369.07c61.26 16.63 120.71 31.97 178.91 46.43l-91.69 367.33 224.51 55.94 92.89-372.33c382.82 72.45 670.67 43.24 791.83-303.02 97.63-278.78-4.86-439.58-206.26-544.44 146.69-33.83 257.18-130.31 286.64-329.61l-.07-.05zm-512.93 719.26c-69.38 278.78-538.76 128.08-690.94 90.29l123.28-494.2c152.17 37.99 640.17 113.17 567.67 403.91zm69.43-723.3c-63.29 253.58-453.96 124.75-580.69 93.16l111.77-448.21c126.73 31.59 534.85 90.55 468.94 355.05h-.02z"
				/>
			</g>
		</svg>
	);
}

export const EthereumSVG = (
	props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
	<svg
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		x="0px"
		y="0px"
		viewBox="0 0 327.5 533.3"
		xmlSpace="preserve"
		{...props}
	>
		<style>{".st0{fill:#8a92b2}.st1{fill:#62688f}"}</style>
		<path className="st0" d="M163.7 197.2V0L0 271.6l163.7-74.4z" />
		<path
			className="st1"
			d="M163.7 368.4V197.2L0 271.6l163.7 96.8zm0-171.2l163.7 74.4L163.7 0v197.2z"
		/>
		<path d="M163.7 197.2v171.2l163.7-96.8-163.7-74.4z" fill="#454a75" />
		<path className="st0" d="M163.7 399.4L0 302.7l163.7 230.7v-134z" />
		<path className="st1" d="M327.5 302.7l-163.8 96.7v134l163.8-230.7z" />
	</svg>
);

export function SolanaSVG(
	props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 397.7 311.7"
			xmlSpace="preserve"
			{...props}
		>
			<linearGradient
				id="a"
				gradientUnits="userSpaceOnUse"
				x1={360.8791}
				y1={351.4553}
				x2={141.213}
				y2={-69.2936}
				gradientTransform="matrix(1 0 0 -1 0 314)"
			>
				<stop offset={0} stopColor="#00ffa3" />
				<stop offset={1} stopColor="#dc1fff" />
			</linearGradient>
			<path
				d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z"
				fill="url(#a)"
			/>
			<linearGradient
				id="b"
				gradientUnits="userSpaceOnUse"
				x1={264.8291}
				y1={401.6014}
				x2={45.163}
				y2={-19.1475}
				gradientTransform="matrix(1 0 0 -1 0 314)"
			>
				<stop offset={0} stopColor="#00ffa3" />
				<stop offset={1} stopColor="#dc1fff" />
			</linearGradient>
			<path
				d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z"
				fill="url(#b)"
			/>
			<linearGradient
				id="c"
				gradientUnits="userSpaceOnUse"
				x1={312.5484}
				y1={376.688}
				x2={92.8822}
				y2={-44.061}
				gradientTransform="matrix(1 0 0 -1 0 314)"
			>
				<stop offset={0} stopColor="#00ffa3" />
				<stop offset={1} stopColor="#dc1fff" />
			</linearGradient>
			<path
				d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z"
				fill="url(#c)"
			/>
		</svg>
	);
}


export function ProfileSVG(
	props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
	return (
		<svg
			
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M18 19c0-2.21-2.686-4-6-4s-6 1.79-6 4m6-7a4 4 0 110-8 4 4 0 010 8z"
				stroke="#000"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

