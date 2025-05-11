import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <main>
            <div style={{ backgroundImage: `url('/images/avatar-cover.jpg')` }} className='bg-cover bg-center w-[100%] h-screen sm:px-8 sm:py-10  '>
                <div className="relative p-6 top-[45%] ">
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-5xl font-semibold'>Votre plaisir commence par ici...</h1>
                        <p className="text-white mt-2 text-2xl sm:relative left-2">Découvrez les meilleurs films du moment</p>                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            
        </main>
    );
}

export default Page;
