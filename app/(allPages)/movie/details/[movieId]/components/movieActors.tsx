"use client"

import LoadingSpinner from '@/app/components/loadingSpinner';
import { Actor } from '@/app/types/allTypes';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const MovieActors = () => {
    const params = useParams();
    const movieId = params.movieId;
    const [ loading, setLoading ] = useState(false)
    const [ movieActors, setMovieActors ] = useState<Actor[] | []>([])
    const [ error, setError ] = useState(false)

    useEffect(() => {
        setLoading(true);
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=fr-FR`)
        .then(response => {
            setMovieActors(response.data.cast);
        }).catch((error) => {
            setError(true)
        }).finally(() => setLoading(false))
    }, []);

    return (
        <div className='bg-gradient-to-b from-black via-red-900 to-black mt-5 rounded-xl p-5 sm:px-10 flex flex-col gap-5'>
            <h1 className='text-center sm:text-start text-2xl font-semibold'>À l'affiche</h1>
            { loading && <div className='flex items-center w-full justify-center'><LoadingSpinner/></div> }
            <div className="flex gap-6 overflow-x-auto flex-nowrap pb-2 scrollbar-hide rounded-2xl py-2">
                {
                    movieActors?.map(actor => <ActorCard actor={actor} /> )
                }                
            </div>
        </div>
    );
}

const ActorCard = ({ actor }: { actor: Actor}) => {
    const [ showButton, setShowButton ] = useState(false)
    const imageUrl = actor.profile_path
    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
    : '/images/person.png';
    return (
        <div className="" onMouseOver={()=> setShowButton(true)} onMouseLeave={()=> setShowButton(false)}>
            <motion.div whileHover={{ y: -10 }} className="bg-center bg-cover size-40 rounded-2xl object-cover" style={{ backgroundImage: `url('${imageUrl}')`}}/>
            <div className="p-4">
                <h3 className="text-lg font-semibold">{actor.name}</h3>
                <p className="text-sm text-zinc-400">comme {actor.character}</p>
            </div>
            <div className='flex justify-center'>
                {
                    showButton && 
                    <Link href={`/actors/details/${actor.id}`}>
                        <span className="px-4 py-1 bg-red-700 hover:bg-red-800 rounded-full"> Détails </span>
                    </Link> 
                }
            </div>
        </div>        
    )
}

export default MovieActors;
