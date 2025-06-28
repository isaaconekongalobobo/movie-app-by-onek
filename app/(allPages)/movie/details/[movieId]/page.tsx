"use client"
import { Movie } from '@/app/types/allTypes';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import MovieDetails from './components/movieDetails';
import { motion } from 'framer-motion';
import MovieActors from './components/movieActors';
const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const movieImageVariant = {
    initial: {
        opacity: 0,
        y: -20
    },
    animate: {
        oapcity: 1,
        y: 0,
    }
}


const Page = () => {
    const params = useParams();
    const movieId = params.movieId;
    const [ loading, setLoading ] = useState(false);
    const [ movie, setMovie ] = useState < Movie|null > (null)
    const [ error, setError ] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=fr-FR`)
        .then(response => {
            setMovie(response.data);
        }).catch((error) => {
            setError(true)
        }).finally(() => setLoading(false))
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-black via-red-900 to-black px-8 py-16 sm:block flex flex-col gap-10 ">
            <div className="h-full flex sm:flex-row flex-col gap-5">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { delay: 1}}} whileHover={{ y: -10 }} className="px-5 sm:px-10 w-full sm:w-[70%] h-[30rem] py-5 pt-[60%] sm:pt-65 bg-center bg-cover rounded-2xl flex flex-col gap-5" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w780${movie?.backdrop_path}')` }}>
                    <h1 className="text-6xl font-medium hover:underline hover:underline-offset-8 top-16">
                        {movie?.title}
                    </h1>
                    <motion.button whileHover={{ scale: 1.1 }} className="bg-black hover:bg-[#FF0800] hover:text-black hover:font-medium px-5 rounded-full py-2 sm:w-60 text-xl">
                        Regarder
                    </motion.button>
                </motion.div>
                <MovieDetails movie={movie} loading={loading} />
            </div>
            <MovieActors/>
        </main>
    );
}

export default Page;
