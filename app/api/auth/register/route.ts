import connectDB from "@/app/utils/db";
import User from "@/app/models/user";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { register } from "@/app/types/zod";

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const body = await req.json();
    if (!body) {
      return NextResponse.json(
        { message: "please Provide Body" },
        { status: 400 }
      );
    }
    const bodyParse = register.safeParse(body);
    if (!bodyParse.success) {
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }
    const { firstname, lastname, username, email, password } = bodyParse.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email or username already exists" },
        { status: 409 }
      );
    }

    const user = await User.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    return NextResponse.json(
      { message: "Registered successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
};
