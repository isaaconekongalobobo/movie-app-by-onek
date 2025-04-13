import SignInForm from '@/app/components/signInForm';
import React from 'react';

const Page = () => {
    return (
    <div className="flex justify-center flex-col items-center h-screen bg-[#FF0800] ">
      <main className="flex flex-col gap-5">
        <h1 className=" text-2xl sm:text-3xl font-semibold text-white">The Movie app <mark className="font-sans px-8 bg-[#010B13] rounded text-white ">by Onek</mark> </h1>
        <SignInForm/>
      </main>
    </div>
    );
}

export default Page;
