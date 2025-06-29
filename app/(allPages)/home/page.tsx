"use client"

export const metadata = {
  title: "Accueil | The Movie App",
  description: "Découvrez les meilleurs films du moment...",
  openGraph: {
    title: "The Movie App by Onek",
    description: "L'application ultime pour les fans de cinéma.",
    url: "https://movie-app-by-onek-ws.onrender.com",
    siteName: "The Movie App by Onek",
    images: [
      {
        url: "https://res.cloudinary.com/do2qnb4zc/image/upload/v1751194581/theMovieApp_lk2iyw.png",
        width: 1200,
        height: 630,
        alt: "Aperçu de l'application The Movie App",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Movie App by Onek",
    description: "Suivez vos films et séries préférés",
    images: ["https://res.cloudinary.com/do2qnb4zc/image/upload/v1751194581/theMovieApp_lk2iyw.png"],
    creator: "@Isaaconek",
  },
};


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
            <div style={{ backgroundImage: `url('/images/avatar-cover.jpg')` }} className='bg-center sm:bg-left bg-no-repeat w-[100%] h-screen sm:px-8 sm:py-10'>
                <div className='bg-black h-screen opacity-20 rounded-2xl '/>
                <div className="relative p-6 top-[-60%] z-10 ">
                    <div className=' hidden sm:flex flex-col gap-5'>
                        <h1 className='text-6xl font-bold sm:w-2/4'>Votre plaisir 
                        <mark className='px-3 mx-3 bg-black text-[#FF0800] rounded-tl-4xl rounded-br-4xl'>commence</mark> par ici...
                        </h1>
                        <p className="text-white mt-2 text-2xl sm:relative left-2 ">Découvrez les meilleurs films du moment</p>                        
                    </div>
                    <div className='flex sm:hidden flex-col gap-5'>
                        <span className='text-5xl font-bold'>Votre plaisir</span>
                        <span className='text-5xl font-black text-[#FF0800]'>commence</span>
                        <span className='text-5xl font-bold'>par ici...</span>
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
