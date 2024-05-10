export interface Project {
	id: string;
	nameSlug: string;
	name: string;
	description?: string;
	blockchain?: BlockChain;
	imageUrl: string;
	bannerUrl: string;
	imageArray?: string[];
	whitelist: boolean;
	featured: boolean;
	verified: boolean;
	prevFollower?: number;
	currFollower?: number;
	accountCreated?: Date;
	createdAt: Date;
	updatedAt: Date;
	ProfileId?: string;
	mintInfo?: MintInfo;
	social?: Social;
	watchList: WatchList[];
	tags: Tags[];
}

export interface BlockChain {
	SOLANA: "solana";
	ETHEREUM: "ethereum";
	BITCOIN: "bitcoin";
}

export interface MintInfo {
	id: string;
	supply?: number;
	mintPrice?: number;
	startTime?: string;
	mintDate?: Date;
	mintInfoId: string;
}

export interface Social {
	id: string;
	x?: string;
	discord?: string;
	website?: string;
	marketplace?: string;
	projectId: string;
	Project: Project;
}

export interface WatchList {
	Project: Project;
	projectId: string;
	profile: Profile;
	profileId: string;
}

export interface Profile {
	id: string;
	newsletter: boolean;
	watchList: WatchList[];
	userId: string;
	user: User;
}

export interface User {
	id: string;
	name: string;
	email: string;
	picture?: string;
	role: UserRole;
	userProfile?: Profile;
}

export interface ProjectRating {
	id: string;
	popularityScore: number;
	popularityCmt?: string;
	credibilityScore: number;
	credibilityCmt?: string;
	utilityScore: number;
	utilityCmt?: string;
	projectId: string;
	Project: Project;
}

export interface Tags {
	id: string;
	name: string;
	projects: Project[];
}

enum UserRole{
    FREE,
    PAID
}