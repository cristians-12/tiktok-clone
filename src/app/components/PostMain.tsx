'use client'
import React, { useEffect } from 'react'
import { Post, PostMainCompTypes } from '../types'
import Image from 'next/image'
import PostMainLikes from './PostMainLikes'

const PostMain = ({ post }: PostMainCompTypes) => {

    useEffect(() => {
        const video = document.getElementById(`video-${post?.id}`) as HTMLVideoElement
        const postMainElement = document.getElementById(`PostMain-${post?.id}`)

        if (postMainElement) {
            let observador = new IntersectionObserver((e) => {
                e[0].isIntersecting ? video.play() : video.pause()
            }, { threshold: [0.6] })
            observador.observe(postMainElement)
        }
    })

    return (
        <>
            <div className={`PostMain-${post?.id} w-full`}>

                <div className='cursor-pointer border-b-[1px] p-5 border-gray-600 justify-between flex items-center w-full'>
                    <div>
                        <div className='flex gap-3'>
                            <Image className='rounded-full' alt='profilepic' width={30} height={30} src={post?.profile?.image} />
                            <span>{post?.profile?.name}</span>
                        </div>
                        <span>{post?.text}</span>
                    </div>

                    <button className='text-[#F12B56] border-[#F12B56] border px-4 py-1 hover:text-white hover:bg-[#F12B56] rounded-lg'>
                        Seguir
                    </button>
                </div>
                <div className='relative flex items-center justify-center h-[85vh] lg:h-[70vh] pt-5'>
                    <div className='w-[40vh] h-full'>
                        <video loop controls muted autoPlay className='rounded-xl object-cover mx-auto h-full' id={`video-${post?.id}`} src={`${post?.video_url}`}>

                        </video>
                    </div>
                    <PostMainLikes post={post} />
                </div>
            </div>
        </>
    )
}

export default PostMain