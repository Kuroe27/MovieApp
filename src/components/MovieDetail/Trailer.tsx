import React, { useEffect, useState } from "react";
import { fetchTrailer } from "../../api/api";

const Trailer = ({ movieId }: { movieId: number }) => {
  const [trailer, setTrailer] = useState([]);
  const [showTrailer, setShowTrailer] = useState<boolean>(false);
  useEffect(() => {
    const data = async () => {
      setTrailer(await fetchTrailer(movieId));
    };
    data();
  }, [movieId]);

  useEffect(() => {
    if (showTrailer) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showTrailer]);

  return (
    <div>
      {trailer && (
        <span className="text-white inline-block mt-5">
          <a
            className="cursor-pointer  text-[#ffffff] bg-[#ffffff11] rounded-xl px-8 py-2   hover:bg-[#ffffff1f] z[50]"
            onClick={() => setShowTrailer(true)}
          >
            Watch Random Trailer
          </a>
        </span>
      )}
      {showTrailer && trailer && (
        <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center  bg-opacity-50 backdrop-filter backdrop-grayscale z-50">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="mt-5 ">
              <button
                className="text-lg text-white cursor-pointer "
                onClick={() => setShowTrailer(false)}
              >
                X
              </button>
              <iframe
                width="1000"
                height="600"
                src={`https://www.youtube.com/embed/${trailer}`}
                title="Trailer"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trailer;
