import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;


const MovieTrailler = () => {
    const params = useParams();
    const movieId = params.movieId;
    const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=fr-FR`)
        .then(res => {
            const trailers = res.data.results.filter((video: any) =>
            video.type === 'Trailer' && video.site === 'YouTube'
            );

            if (trailers.length > 0) {
            setTrailerUrl(`https://www.youtube.com/watch?v=${trailers[0].key}`);
            }
        });
    }, [movieId]);

    if (!trailerUrl) return <p>Aucune bande-annonce trouvée.</p>;

    return (
        <div className="aspect-video sm:w-[50%] sm:mt-5 ">
            <iframe
                className="w-full h-full rounded-xl"
                src={trailerUrl.replace('watch?v=', 'embed/')}
                title="Trailer"
                allowFullScreen
            />
        </div>
    );
};

export default MovieTrailler;
