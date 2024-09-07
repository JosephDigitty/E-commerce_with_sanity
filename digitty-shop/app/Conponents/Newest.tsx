import { client } from '@/lib/sanity'
import React from 'react'
import { simplifiedProduct } from './interface'
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
async function getData() {
    const query = `*[_type == "product"][0...4] | order(_createdAt asc) {
  _id,
   price,
   name,
    "slug": slug.current,
  "categoryName": categories->name,
    "imgURL": images[0].asset->url }`

    const data = await client.fetch(query) ;
    return data
}



const Newest = async () => {

    const data: simplifiedProduct[] = await await getData()
  return (
     <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 '>
            <div className='justify-between flex items-center'>
                <h2 className='text-2xl font-bold tracking-tight text-gry-900'>
                    Our Newest Product
                </h2>
                <Link className='text-primary flex items-center gray-x-1 ' href="/all">
                See All
                <span>
                    <ArrowRight/>
                </span>
                </Link>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-18 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {data.map((product) => (
                  <div key={product._id} className='group reoative'>
                    <div className='aspect-square w-full overflow-hidden rounded-md
                      bg-gray-200 group-hover:opacity-75 lg:h-80 '>
                        <Image src={product.imgURL} alt={product.name} 
                        className='w-full h-full object-cover lg:h-full lg:w-full w' width={300}  height={300}/>
                    </div>
                    <div className='mt-4 flex justify-between'>
                        <div>
                        <h3 className='text-sm text-gray-500'>
                            <Link href={`/product/${product.slug}`}>
                            {product.name}
                            </Link>
                        </h3>
                        <p className='mt-1 text-sm text-gray-500'>
                            {product.categoryName}
                        </p>
                        </div>
                        <p className='text-sm font-medium text-gray-900'>
                            ${product.price}
                            </p>
                    </div>
                  </div>  

                ))}

            </div>
        </div>

     </div>
  )
}

export default Newest