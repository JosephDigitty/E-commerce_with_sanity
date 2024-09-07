"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, ShoppingBagIcon } from "lucide-react";
const links = [
    {name: "Home", url: "/"},  
    {name: "Men", url: "/men"},
    {name: "Woman", url: "/woman"},
    {name: "Teens", url: "/teens"},
]
const Nabar = () => {
    const pathname = usePathname()
    return ( 
        <header className="mt-8 border-b">
            <div className="flex items-center justify-between
             mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                <h1 className="md:text-5xl text-2xl font-bold ">
                <span className="text-primary">Digitty</span> Shop
                </h1>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, index) => (
                        <div key={index}>
                            {pathname === link.url ? (
                                <Link href={link.url}
                                className="text-lg font-semibold text-primary">
                                        {link.name}

                                </Link>
                            ) : (
                                <Link href={link.url}
                                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary">
                                        {link.name}
                                </Link>

                            )}
                        </div>
                    ))}

                </nav>

                <div className="flex divide-x border-y sm:border-l">
                <Button variant={"outline"} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:w-24 rounded-none">
                    <ShoppingBag className="text-primary"/>
                    <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                        Cart
                    </span>
                </Button>

                </div>
            </div>

        </header>
     );
}
 
export default Nabar;