"use client"
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
interface iAppProps {
    images: any;
}
type Props = {}

const Gallery = ({images}: iAppProps) => {
    const [bigImage, setBigImage] = useState(images[1])
    const handleImageClick = (image: any) => {
        setBigImage(image)
    }
  return (
    <div className='grid gap-4 lg:grid-cols-5 '>
        <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
            {images.map((image: any, idx: any) => (
                <div key={idx} className='overflow-hidden rounded-lg bg-gray-100'>
                    <Image src={urlFor(image).url()} width={200} height={200} alt='photo' onMouseEnter={ () => handleImageClick(image)}
                    className='w-full h-full object-cover object-center cursor-pointer'/>
                </div>
            ))}
        </div>
        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 ">
               <Image src={urlFor(bigImage).url()} alt='photo'width={500} height={500} 
               className='h-[500px] w-full object-contain object-center'/>

               <span className='absolute left-0 top-0 rounded-br-lg bg-red-500 
               px-3 py-1.5 text-sm capitalize tracking-wider text-white'>
                In stock
               </span>
             </div>
    </div>
  )
}

export default Gallery