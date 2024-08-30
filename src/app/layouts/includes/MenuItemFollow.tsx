import { MenuItemFollowCompTypes } from '@/app/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuItemFollow = ({user}: MenuItemFollowCompTypes) => {
  return (
    <>
        <Link href={`/profile/${user?.id}`} className='rounded-full flex gap-2 mt-3'>
          <Image width={40} height={30} src={user?.image} alt='profile pic' className='rounded-full' />
          <div className='hidden lg:block'>
            <p className='truncate font-bold'>{user?.name}</p>
            <p className='text-[10px]'>{user?.name}</p>
          </div>
        </Link>
    </>
  )
}

export default MenuItemFollow