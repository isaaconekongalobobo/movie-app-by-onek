import { Movie } from '@/app/types/allTypes';
import React from 'react';
interface MovieDetailsType {
    movie: Movie | null
}
const MovieDetails = ({ movie }: MovieDetailsType) => {
    if (!movie) return <p>Chargement...</p>;
    return (
        <div className='sm:w-3/4'>
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
                <p className=''> <mark className='px-2'>En bref :</mark> <br /> <br /> {movie.overview} </p>
                <div className='pt-1'>
                    <div className='bg-center bg-cover h-56 sm:w-1/4 rounded-2xl' style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w780${movie?.backdrop_path}')` }}/>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
