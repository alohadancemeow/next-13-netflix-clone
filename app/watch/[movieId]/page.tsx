import getMovieBytId from "@/actions/getMovieById";
import WatchMovie from "@/components/WatchMovie";

type Props = {
  movieId?: string;
};

const WatchPage = async ({ params }: { params: Props }) => {
  const { movieId } = params;

  const movie = await getMovieBytId(movieId!);

  return <WatchMovie movie={movie} />;
};

export default WatchPage;
