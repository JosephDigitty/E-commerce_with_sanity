import { client, urlFor } from '@/lib/sanity';
import React from 'react'
import { simplifiedProduct } from '../Conponents/interface';
import Link from 'next/link';
import Image from 'next/image';

async function getData(categories: string) { 
    const query = `*[_type == "product" && categories->name == "${categories}" ] {
  _id,
    "imgURL": images[0].asset->url,
      price,
    name,
    "slug": slug.current,
    "categoryName": categories->name
}`

    const data = await client.fetch(query);
    return data;
}



const CategoryPage = async ({params}: {params: {category:string} }) => {

    const data: simplifiedProduct[] = await getData(params.category)

  return (
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 '>
            <div className='justify-between flex items-center'>
                <h2 className='text-2xl font-bold tracking-tight text-gry-900'>
                    Our products for {params.category} 
                </h2>
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
                            {params.category}
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

export default CategoryPage