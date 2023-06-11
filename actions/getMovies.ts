import prisma from "@/libs/prismadb";
import { getSession } from "./getCurrentUser";

const getMovies = async () => {
  // const session = await getSession();

  // if (!session) return null;

  const movies = await prisma.movie.findMany({});

  return movies;
};

export default getMovies;
