import PostMain from '@/app/components/PostMain'
import React from 'react'

const page = () => {
    return (
        <>

            <PostMain post={{
                id: '123',
                user_id: '1',
                video_url: 'https://vdownload-46.sb-cd.com/1/6/16032395-720p.mp4?secure=PiCLqtGVkirVW97YisKjZg,1725043339&m=46&d=1&_tid=16032395',
                text: 'Yesterday walk',
                created_at: 'today',
                likes: ['sheim'],
                profile: {
                    id: '1',
                    name: 'test',
                    image: '/images/placeholder-user.jpg'
                }
            }} />
            <PostMain post={{
                id: '123',
                user_id: '1',
                video_url: 'https://vdownload-30.sb-cd.com/9/4/9401237-720p.mp4?secure=xIyAJAtN5IC-CREDyEn2rg,1725043709&m=30&d=1&_tid=9401237',
                text: 'Yesterday walk',
                created_at: 'today',
                likes: ['sheim'],
                profile: {
                    id: '1',
                    name: 'test',
                    image: '/images/placeholder-user.jpg'
                }
            }} />
            <PostMain post={{
                id: '123',
                user_id: '1',
                video_url: 'https://vdownload-49.sb-cd.com/1/2/12933708-720p.mp4?secure=AVwov8_RygqHdco0iDTwSw,1725043815&m=49&d=1&_tid=12933708',
                text: 'Yesterday walk',
                created_at: 'today',
                likes: ['sheim'],
                profile: {
                    id: '1',
                    name: 'test',
                    image: '/images/placeholder-user.jpg'
                }
            }} />
            
        </>

    )
}

export default page