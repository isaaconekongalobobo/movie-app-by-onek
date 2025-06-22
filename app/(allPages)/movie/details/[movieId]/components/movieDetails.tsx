import { Movie } from '@/app/types/allTypes';
import React from 'react';
interface MovieDetailsType {
    movie: Movie | null
}
const MovieDetails = ({ movie }: MovieDetailsType) => {
    if (!movie) return <p>Chargement...</p>;
    return (
        <div className='w-3/4'>
            <div className='flex flex-col gap-2'>
                <span className='text-2xl font-medium text-red-600'> {movie.title} </span>
                <div className='flex flex-col gap-1'>
                    {/* Etoiles du film */}
                    <div>
                        {
                            [...Array(5)].map((_, i) => <span key={i}>{i < Math.round(movie.vote_average / 2) ? '⭐' : '☆'}</span>)
                        }                
                    </div>
                    <span>Budget : {movie.budget === 0 ? "Aucun détail sur le budget" : movie.budget.toLocaleString() + " $"}</span>                        
                </div>
                <p> <mark className='px-2'>En bref :</mark> <br /> <br /> {movie.overview} </p>
            </div>
        </div>
    );
}

export default MovieDetails;
