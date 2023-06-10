import { PrismaClient } from "@prisma/client";
import { movieData } from "../data/movieData";

const prisma = new PrismaClient();

async function main() {
  const seedMovies = await prisma.movie.createMany({
    data: movieData,
  });

  console.log({ seedMovies });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
