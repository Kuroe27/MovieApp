import { useEffect, useState } from "react";
import { fetchLogo } from "../../../api/api";

interface Logos {
  id: number;
  name: string;
  file_path: string;
  iso_639_1: string;
}

const Logo = ({ movieId }: { movieId: number }) => {
  const [logo, setLogo] = useState<Logos[]>([]);
  const [englishLogo, setEnglishLogo] = useState<Logos | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const logoData = await fetchLogo(movieId);
      setLogo(logoData);
      const english = logoData.find(
        (logo: { iso_639_1: string }) => logo.iso_639_1 === "en"
      );
      setEnglishLogo(english);
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <div className="w-full h-full">
        {englishLogo && (
          <img
            src={"https://image.tmdb.org/t/p/w1280" + englishLogo.file_path}
            className="z-[200] w-full h-full max-h-[8rem] bg-center  min-w-[144px]"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

export default Logo;
