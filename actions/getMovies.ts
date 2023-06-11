import prisma from "@/libs/prismadb";

const getMovies = async () => await prisma.movie.findMany({});

export default getMovies;
