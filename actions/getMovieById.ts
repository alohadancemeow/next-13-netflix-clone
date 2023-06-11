import prisma from "@/libs/prismadb";

const getMovieBytId = async (movieId: string) =>
  await prisma.movie.findUnique({
    where: {
      id: movieId,
    },
  });

export default getMovieBytId;
