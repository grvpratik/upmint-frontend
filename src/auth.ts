import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [Twitter],
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			console.log(user, "USER")
			console.log(account, "ACCOUNT")
			console.log(email,"EMAIL")
			return true
		},
	},
});
