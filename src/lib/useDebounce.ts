'use client'
import { useEffect, useState } from "react";


const useDebounce = <T,>(value: T, delay: number): T => {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [value, delay]);
	return debounceValue;
};

export default useDebounce;






























// import { useTimeout } from "./useTimeout";

// export const useDebounce = (
// 	callback: () => void,
// 	delay: number,
// 	deps: ReadonlyArray<any>
// ) => {
// 	const { reset, clear } = useTimeout(callback, delay);

// 	useEffect(reset, [...deps, reset]);
// 	useEffect(clear, []); // Empty dependency array to run the effect only once
// };
