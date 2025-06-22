"use client"

import MovieCard from '@/app/components/movieCard';
import { Movie } from '@/app/types/allTypes';
import axios from 'axios';
import { error } from 'console';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMG_BASE_URL;
    

const Page = () => {
    const [ movies, setMovies ] = useState<Movie[] | []>([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading (false)
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`)
        .then((response) => {
            setMovies(response.data.results);
        }).catch((error) => {
            console.log('\n \n Erreur lors de la recuperation des films :', error.response);
        }).finally(() => setLoading (false))
    }, []);
    return (
        <main>
            <div style={{ backgroundImage: `url('/images/avatar-cover.jpg')` }} className='bg-left bg-no-repeat w-[100%] h-screen sm:px-8 sm:py-10'>
                <div className="relative p-6 top-[40%] ">
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-6xl font-bold w-2/4'>Votre plaisir 
                        <mark className='px-3 mx-3 bg-black text-[#FF0800] rounded-tl-4xl rounded-br-4xl'>commence</mark> par ici...
                        </h1>
                        <p className="text-white mt-2 text-2xl sm:relative left-2 top-10">Découvrez les meilleurs films du moment</p>                        
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 px-8 py-16 bg-gradient-to-b from-black via-red-900 to-black">
                { loading ? <h1 className="text-white text-xl">Chargement des films...</h1> : (
                    movies.map((movie, key) => (
                        <MovieCard
                        id={movie.id}
                        key={key}
                        img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        title={movie.title}
                        popularity={movie.vote_average}
                        />
                    ))
                    )
                }
            </div>
        </main>
    );
}

export default Page;
