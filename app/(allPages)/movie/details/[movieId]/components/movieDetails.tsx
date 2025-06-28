import { Movie } from '@/app/types/allTypes';
import { truncateByWords } from '@/utils/StringUtils';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MovieSegonddetails from './movieSegonddetails';
import LoadingSpinner from '@/app/components/loadingSpinner';
interface MovieDetailsType {
    movie: Movie | null,
    loading: boolean
}
const MovieDetails = ({ movie, loading }: MovieDetailsType) => {
    const [ overviewHeigth, setOverViewHeigth ] = useState(false)
    const showMoreOrLessOverView = () => setOverViewHeigth(!overviewHeigth)
    
    if (!movie) return <div className='flex items-center w-full justify-center'><LoadingSpinner/></div>;
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { delay: 1}}} className="sm:w-3/4">
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-medium text-red-600">{movie.title}</span>
          <div className="flex flex-col gap-1">
            {/* Etoiles du film */}
            <div>
              {[...Array(5)].map((_, i) => (
                <span key={i}>
                  {i < Math.round(movie.vote_average / 2) ? "⭐" : "☆"}
                </span>
              ))}
            </div>
            <span> Budget : {movie.budget === 0 ? "Aucun détail sur le budget" : movie.budget.toLocaleString() + " $"}</span>
          </div>
          <div className="flex flex-col gap-4">
            <div className='w-full flex justify-between sm:pr-5'>
                <mark className="px-2">En bref :</mark>
                <motion.span whileHover={{ scale: 1.1, y: -5 }} className='bg-red-600 hover:bg-red-800 hover:text-white px-3 rounded-full py-0.5 cursor-pointer ' onClick={()=> showMoreOrLessOverView()} > { overviewHeigth ? "Voir moins" : "Voir plus" } </motion.span>
            </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={overviewHeigth ? "full" : "truncated"}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              {overviewHeigth ? movie.overview : truncateByWords(movie.overview)}
            </motion.p>
          </AnimatePresence>
          </div>
          <AnimatePresence>
            { !overviewHeigth && <MovieSegonddetails backdropPath={movie.backdrop_path} /> }
          </AnimatePresence>
        </div>
      </motion.div>
    );
}

export default MovieDetails;
