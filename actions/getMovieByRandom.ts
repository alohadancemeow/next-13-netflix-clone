import { getSession } from "./getCurrentUser";
import prisma from "@/libs/prismadb";

export default async function getMovieByRandom() {
  // const session = await getSession();

  // if (!session) return null;

  const movieCount = await prisma.movie.count();
  const randomIndex = Math.floor(Math.random() * movieCount);

  const randomMoives = await prisma.movie.findMany({
    take: 1,
    skip: randomIndex,
  });

  return randomMoives[0];
}
