import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

interface MovieProps {
  movie: {
    vote_average: number;
    release_date: string;
    poster_path: string;
    id: number;
    title: string;
    backdrop_path: string;
    overview: string;
  };
}

const Movie = ({ movie }: MovieProps) => {
  return (
    <div className="flex flex-col shadow-2xl rounded-lg mt-20">
      <Link to={`/movie/${movie.id}`}>
        <>
          {movie.poster_path ? (
            <img
              className="w-full h-auto rounded-t-lg flex-1 cursor-pointer text-center "
              src={"https://image.tmdb.org/t/p/w1280" + movie.poster_path}
              alt="POSTER N/A"
              loading="lazy"
            />
          ) : (
            <img
              className="w-full h-auto rounded-t-lg flex-1 cursor-pointer text-center "
              src="https://placehold.co/250x400/000000/000000f1?text=N/A"
              alt="POSTER N/A"
              loading="lazy"
            />
          )}
        </>
      </Link>
      <div className="p-3">
        <div className="movie" key={movie.id}></div>
        <div className="text-[#dedada] truncate font-bold hover:text-stone-900 cursor-pointer">
          <Link to={`/movie/${movie.id}`}>
            <h4 className="Title whitespace-nowrap overflow-hidden text-ellipsis">
              {movie.title}
            </h4>
          </Link>
        </div>
        <div className="flex justify-between text-[#dedadabe]">
          {movie.release_date ? movie.release_date.slice(0, 4) : "Soon"}
          <div className="flex">
            <AiFillStar className="text-yellow-500 self-center mr-2" />
            {movie.vote_average}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
