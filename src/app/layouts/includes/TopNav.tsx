import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
// import {CiSearch} from 'react-icons/ci';


const TopNav = () => {
    const router = useRouter()
    const pathname = usePathname()
    const handleSearchName = (e: { target: { value: string } }) => {

    }

    return (
        <div className='lg:px-20 lg:py-3 flex items-center '>
            <Link href={'/'} >
                <Image width={300} height={300} className='lg:w-[30%]' src="/images/tiktok-logo.png" alt="" />
            </Link>
            <div className='relative lg:w-[40%]'>
                <input type="text" placeholder='Buscar' onChange={handleSearchName} className=' focus:outline-none bg-[transparent] w-[100%] border border-gray-100 px-5 py-2 rounded-2xl' />
                <div className='absolute top-12 w-full bg-[#252525] rounded-lg px-5 py-2'>
                    <div className='hover:bg-[#F12B56] p-2'>
                        <Link href={`/profile/1`}  >
                            <Image src={''} />
                            <div>Profile 1</div>
                        </Link>
                    </div>
                </div>
                <div className='absolute top-2 right-5 '>
                    <IoSearchOutline size={25}/>
                </div>
            </div>

        </div>
    )
}

export default TopNav