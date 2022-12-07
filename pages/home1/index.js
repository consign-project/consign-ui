import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <section>
      <div >
      <div class="absolute top-2 right-3 h-16 w-19 ...">
      <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
      CONNECT TO WALLET
</button>
</div>

  <div class="absolute top-20 pt-10 pb-10 ... mb-20 ml-20 space-y-10" >
        <b className="text-blue-800 text-7xl ... mb-3 ml-10" >Consign</b>
       
        <p className="text-black-700 text-2xl mb-3 ml-10">A block chain based certificate issuing platform</p>


        <button type="button" class="py-3 px-3 mb-3 ml-10 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800">
  GET STARTED
</button>
</div>
<div className="absolute bottom-5 right-3  ...">
  <div className="w-6/12 sm:w-4/12 px-4">
<img src="/user/Pictures/home.jpeg"></img>
</div>
</div>
      </div>
    </section>
  );
}

