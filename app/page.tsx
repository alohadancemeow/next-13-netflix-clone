import getCurrentUser from "@/actions/getCurrentUser";
import getMovieByRandom from "@/actions/getMovieByRandom";
import getMovies from "@/actions/getMovies";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";

const Home = async () => {
  const currentUser = await getCurrentUser();
  // console.log("currentUser", currentUser);

  const randomMovie = await getMovieByRandom();
  // console.log("randomMovie", randomMovie);

  const movies = await getMovies()

  return (
    <main>
      <>
        <Navbar currentUser={currentUser} />
        <Billboard randomMovie={randomMovie} />
        <div className="pb-40">
          <MovieList title="Trending Now" data={movies} />
          {/* <MovieList title="My List" data={favorites} /> */}
        </div>
      </>
    </main>
  );
};

export default Home;
