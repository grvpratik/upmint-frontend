"use client";
import React from "react";
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
	const queryClient = new QueryClient();
	return (
		<div>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</div>
	);
};

export default QueryProvider;
