import ClientOnly from '@/app/components/ClientOnly'
import MenuItemFollow from '@/app/layouts/includes/MenuItemFollow'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { RiUserFollowLine } from 'react-icons/ri'

const SideNavMain = () => {
    const pathname = usePathname()
    return (
        <div className=''>
            <div className='fixed h-screen left-0 lg:w-[16%] w-[40px] flex flex-col lg:px-5 gap-3 px-2 pt-3 border-e-[1px] lg:border-e-0 border-gray-600'>
                <div className=' border-gray-600 pt-2'>
                    <Link href={'/'}>
                        <div className={`flex items-center gap-5 ${pathname == '/' ? 'text-[#FF3B5C] font-extrabold' : ''}`}>
                            <FaHome size={30} />
                            <span className='lg:block hidden'>Para ti</span>
                        </div>
                    </Link>
                    <div className={`flex w-full pt-2 items-center gap-5 ${pathname == '/follow' ? 'text-[#FF3B5C] font-extrabold' : ''}`}>
                        <RiUserFollowLine size={30} />
                        <span className='lg:block hidden'>Siguiendo</span>
                    </div>
                </div>

                {true ? (
                    <div>
                        <div className='border-t-[1px] border-gray-600 pt-2 pb-2'>
                            <span className='text-[15px] lg:block hidden'>Cuentas sugeridas</span>
                            <ClientOnly>
                                <div className='mt-1'>
                                    <MenuItemFollow user={{ id: '1', name: 'test', image: '/images/placeholder-user.jpg' }} />
                                </div>
                            </ClientOnly>
                            <button className='text-[#FF3B5C] mt-3 lg:block hidden'>Ver todas</button>
                        </div>
                        <div>
                        <div className='border-t-[1px] border-gray-600 pt-2 pb-2'>
                            <span className='text-[15px] lg:block hidden'>Cuentas seguidas</span>
                            <ClientOnly>
                                <div className='mt-1'>
                                    <MenuItemFollow user={{ id: '1', name: 'test', image: '/images/placeholder-user.jpg' }} />
                                </div>
                            </ClientOnly>
                            <button className='text-[#FF3B5C] lg:block hidden mt-3'>Ver todas</button>
                        </div>
                    </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default SideNavMain