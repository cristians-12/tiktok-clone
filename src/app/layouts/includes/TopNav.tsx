import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
// import { useRouter } from 'next/router'
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { HiOutlineUser, HiPlus } from 'react-icons/hi'
import { IoSearchOutline } from 'react-icons/io5'
import { MdOutlineLogout } from 'react-icons/md'
// import {CiSearch} from 'react-icons/ci';


const TopNav = () => {
    const router = useRouter()
    const pathname = usePathname()
    const handleSearchName = (e: { target: { value: string } }) => {

    }

    return (
        <div className='lg:px-1 lg:py-3 p-5 flex items-center justify-around border-b-[1px] border-gray-600 fixed left-[15%] w-full lg:left-[15%] lg:pe-[15%] z-40'>
            <div>
                <Link href={'/'} >
                    <Image width={350} height={300} className='lg:w-[50%] w-[40%]' src="/images/tiktok-logo.png" alt="" />
                </Link>
            </div>
            <div className='relative lg:w-[40%] lg:block hidden'>
                <input type="text" placeholder='Buscar' onChange={handleSearchName} className=' focus:outline-none bg-[transparent] w-[100%] border border-gray-100 px-5 py-2 rounded-2xl' />
                <div className='absolute top-12 w-full bg-[#252525] rounded-lg px-5 py-2 hidden'>
                    <div className='hover:bg-[#F12B56] p-2'>
                        <Link href={`/profile/1`}  >
                            {/* <Image src={''} /> */}
                            <div>Profile 1</div>
                        </Link>
                    </div>
                </div>
                <div className='absolute top-2 right-5 '>
                    <IoSearchOutline size={25} />
                </div>
            </div>
            <div className='lg:flex hidden gap-5'>
                <div className='flex border border-gray-400 rounded-lg px-4 cursor-pointer py-1 items-center gap-3'>
                    <HiPlus size={20} />
                    <span>Cargar</span>
                </div>
                {false ? (
                    <div className='cursor-pointer relative'>
                        <Image className='rounded-full' width={40} height={20} alt='profile' src={'/images/placeholder-user.jpg'} />
                        <div className='absolute w-[200px] left-[-100px] p-5 hidden'>
                            <div className='flex items-center gap-2'>
                                <HiOutlineUser />
                                <span>Perfil</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdOutlineLogout />
                                <span>Cerrar sesion</span>
                            </div>

                        </div>
                    </div>
                )
                    :
                    (<>
                        <div className='bg-[#F12B56] px-5 py-1 cursor-pointer font-medium rounded-md'>
                            <span>Ingresar</span>
                        </div>
                    </>)}
            </div>
        </div>
    )
}

export default TopNav