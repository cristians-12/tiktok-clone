'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Post, PostMainCompTypes } from '../types'
import Image from 'next/image'
import PostMainLikes from './PostMainLikes'

const PostMain = ({ post }: PostMainCompTypes) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const postMainRef = useRef<HTMLDivElement>(null)
    const [pause, setPause] = useState(false);

    useEffect(() => {
        const video = videoRef.current
        const postMainElement = postMainRef.current

        if (postMainElement && video) {
            console.log(videoRef)
            const observador = new IntersectionObserver((e) => {
                e[0].isIntersecting ? video.play() : video.pause()
            }, { threshold: [0.6] })

            observador.observe(postMainElement)

            return () => {
                observador.unobserve(postMainElement)
            }
        }
    }, [post?.id])

    const handleClick: React.MouseEventHandler<HTMLVideoElement> = (event) => {
        !pause ? videoRef.current?.pause() : videoRef.current?.play();
        setPause(!pause)
    };

    return (
        <>
            <div ref={postMainRef} className={`PostMain-${post?.id} w-full`}>

                <div className='cursor-pointer border-b-[1px] p-5 border-gray-600 justify-between flex items-center w-full'>
                    <div>
                        <div className='flex gap-3 mb-2'>
                            <Image className='rounded-full' alt='profilepic' width={30} height={30} src={post?.profile?.image} />
                            <span>{post?.profile?.name}</span>
                        </div>
                        <span className='font-light mt-2'>{post?.text}</span>
                    </div>

                    <button className='text-[#F12B56] border-[#F12B56] border px-4 py-1 hover:text-white hover:bg-[#F12B56] rounded-lg'>
                        Seguir
                    </button>
                </div>
                <div className='relative flex items-center justify-center h-[85vh] lg:h-[70vh] pt-5'>
                    <div className='w-[40vh] h-full'>
                        <video onClick={handleClick} ref={videoRef} loop muted autoPlay className='rounded-xl object-cover mx-auto h-full' id={`video-${post?.id}`} src={`${post?.video_url}`} />

                    </div>
                    <PostMainLikes post={post} />
                </div>
            </div>
        </>
    )
}

export default PostMain
