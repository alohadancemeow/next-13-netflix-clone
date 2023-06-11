import prisma from "@/libs/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";

type Params = {
  movieId?: string;
};

export async function POST(req: Request, { params }: { params: Params }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const { movieId } = params;

  if (!movieId || typeof movieId !== "string") {
    throw new Error("Invalid Id");
  }

  const existingMovie = await prisma.movie.findUnique({
    where: {
      id: movieId,
    },
  });

  if (!existingMovie) {
    throw new Error("Invalid ID");
  }

  //   let favoriteIds = [...(currentUser.favoriteIds || [])];
  //   favoriteIds.push(movieId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds: {
        push: movieId,
      },
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(req: Request, { params }: { params: Params }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const { movieId } = params;

  if (!movieId || typeof movieId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(currentUser.favoriteIds || [])];
  favoriteIds = favoriteIds.filter((id) => id !== movieId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });

  return NextResponse.json(user);
}
