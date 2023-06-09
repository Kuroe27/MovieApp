import { useEffect, useState } from "react";
import { fetchSimilar } from "../../../api/api";
import MovieList from "./MovieList";
import "swiper/css";
import "swiper/css/navigation";

const Similar = ({ movieId }: { movieId: number }) => {
  const [similarMovies, setSimilarMovies] = useState({ results: [] });

  useEffect(() => {
    const data = async () => {
      setSimilarMovies(await fetchSimilar(movieId));
    };
    data();
  }, [movieId]);

  return (
    <>
      {similarMovies && similarMovies.results.length > 0 && (
        <section className="px-5  1lg:px-10  2xl:px-0 relative movieDetails max-w-screen-2xl mx-auto">
          <div className="Cast my-5 w-full">
            <h2 className="text-white text-3xl font-bold my-6">
              Similar Movies
            </h2>
            <MovieList movies={similarMovies.results || []} />
          </div>
        </section>
      )}
    </>
  );
};

export default Similar;
