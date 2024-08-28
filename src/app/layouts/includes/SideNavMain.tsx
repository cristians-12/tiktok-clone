import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { RiUserFollowLine } from 'react-icons/ri'

const SideNavMain = () => {
    const pathname = usePathname()
    return (
        <>
            <div className='fixed left-0 w-[300px] flex flex-col justify-center px-5 gap-3 border-t-[1px] border-gray-600 pt-3'>
                <Link href={'/'}>
                    <div className={`flex items-center gap-5 ${pathname == '/' ? 'text-[#FF3B5C] font-extrabold' : ''}`}>
                        <FaHome size={30} />
                        <span>Para ti</span>
                    </div>
                </Link>
                <div className={`flex items-center gap-5 ${pathname == '/follow' ? 'text-[#FF3B5C] font-extrabold' : ''}`}>
                    <RiUserFollowLine size={30} />
                    <span>Siguiendo</span>
                </div>
            </div>
        </>
    )
}

export default SideNavMain