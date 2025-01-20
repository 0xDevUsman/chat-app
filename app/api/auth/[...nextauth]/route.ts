import User from "@/app/models/user";
import connectDB from "@/app/utils/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credentials not provided");
        }
        try {
          await connectDB();
          const { email, password } = credentials;

          const user: {
            _id: string;
            email: string;
            password: string;
            firstname: string;
            lastname: string;
          } | null = await User.findOne({ email: email });

          if (!user) {
            throw new Error("No user found");
          }
          const isValidPassword = await bcrypt.compare(password, user.password);
          if (!isValidPassword) {
            throw new Error("Invalid password");
          }
          return {
            id: user._id.toString(),
            email: user.email,
            name: `${user.firstname} ${user.lastname}`,
          };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/app/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt" as const,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
export {authOptions as GET , authOptions as POST }
