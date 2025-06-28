import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface MovieSegonddetailsType {
    backdropPath: string | null
}

const movieSegonddetailsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const MovieSegonddetails = ({ backdropPath, }: MovieSegonddetailsType) => {
    return (
        <motion.div  initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="mt-2 ">
            <div className="bg-center bg-cover h-56 sm:w-1/4 rounded-2xl" style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w780${backdropPath}')`}}/>
        </motion.div>
    );
}

export default MovieSegonddetails;
