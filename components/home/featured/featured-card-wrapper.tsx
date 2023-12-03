import { Button } from '@/components/ui/button'
import { AreaChart, Bed, Car, ShowerHead } from 'lucide-react'
import Image from 'next/image'

export const FeaturedCardWrapper = () => {
    return (
        <div className='w-full space-y-20'>
            <div className='grid grid-cols-3 gap-8'>
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />

            </div>
            <div className='flex justify-center col-span-3'>
                <Button variant="outline" className='text-secondary border border-secondary w-32 hover:border-hover hover:text-hover transition-all'>Load More</Button>
            </div>
        </div>
    )
}

export const FeaturedCard = () => {
    return (
        <div className='relative col-span-1 transition-all duration-300'>
            <div className="overlay absolute inset-0 z-50 w-full h-full flex justify-between flex-col p-3  text-white bg-gradient-to-t  cursor-pointer hover:from-gray-900/50 from-gray-900/70 via-gray-900/40 to-transparent">
                <span className='bg-lime-600 text-white uppercase text-xs rounded-sm inline-block p-1 w-fit'>Featured</span>
                <div className='flex flex-col gap-2'>
                    <span className='bg-gray-800/70 text-white uppercase text-xs rounded-sm w-fit p-1'>For Rent</span>
                    <div className='text-sm'>$4,500/mo</div>
                    <ul className='list-none flex gap-5 items-center text-sm'>
                        <li className='flex items-center gap-1'>
                            <Bed className='h-4 w-4' /> <span>5</span>
                        </li>
                        <li className='flex items-center gap-1'>
                            <ShowerHead className='h-4 w-4' /> <span>3</span>
                        </li>
                        <li className='flex items-center gap-1'>
                            <Car className='h-4 w-4' /> <span>1</span>
                        </li>
                        <li className='flex items-center gap-1'>
                            <AreaChart className='h-4 w-4' /> <span>3450 Sq ft</span>
                        </li>
                    </ul>

                </div>
            </div>
            <div className='relative z-40'>
                <Image src="/banner.jpg" height={400} width={400} alt="" />
            </div>
        </div>
    )
}