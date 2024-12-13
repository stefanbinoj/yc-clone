import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],

  // Define the secret key used to encrypt JWTs
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // JWT callback to store user info in the token
    async jwt({ token, account, user }) {
      if (user) {
        // const user = await User.findOne({ email: user.email });
        // if (!user) {
        //   // Save user data to DB
        //   const newUser = await User.create({
        //     email: user.email,
        //     name: user.name,
        //     githubId: user.id, // GitHub-specific
        //   });
        // }
        console.log("user is ",user)

        token._id=user.id;
        token.name = user.name;
        token.email = user.email;
        token.image=user.image;
      }
      return token;
    },
    
    // Session callback to pass user data into the session
    async session({ session, token }) {
      if (token) {
        // Add properties to session from the token
        session.user._id=token._id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture  ;
      }
      return session;
    },
  },

  session: {
    strategy: "jwt", // Using JWT strategy for session management
  },

  // Debugging (optional, helpful for debugging NextAuth.js issues)
  debug: true,
};

const handler = NextAuth(authOptions);

// Export the handler for both GET and POST requests (for Next.js API routes)
export { handler as GET, handler as POST };
