import getCurrentUser from "@/actions/getCurrentUser";
import getFavoriteMovies from "@/actions/getFavoriteMovies";
import getMovieByRandom from "@/actions/getMovieByRandom";
import getMovies from "@/actions/getMovies";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";

const Home = async () => {
  const currentUser = await getCurrentUser();
  const movies = await getMovies();
  const randomMovie = await getMovieByRandom();
  const favorites = await getFavoriteMovies();

  return (
    <>
      <Navbar currentUser={currentUser} />
      <Billboard randomMovie={randomMovie} />
      <div className="pb-40">
        <MovieList
          title="Trending Now"
          data={movies}
          currentUser={currentUser}
        />
        <MovieList title="My List" data={favorites} currentUser={currentUser} />
      </div>
    </>
  );
};

export default Home;
