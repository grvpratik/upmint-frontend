/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"res.cloudinary.com",
			"atlas3-public.s3.us-east-1.amazonaws.com",
			"pbs.twimg.com",
		],
	},

};

export default nextConfig;
