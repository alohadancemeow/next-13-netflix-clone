import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

type Params = {
  id: string;
};

export async function GET(req: Request, { params }: { params: Params }) {
  const { id } = params;

  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id,
      },
    });

    return NextResponse.json(movie);
  } catch (error) {
    console.log(error);
  }
}
