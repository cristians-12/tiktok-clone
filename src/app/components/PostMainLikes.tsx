import React, { useState } from 'react'
import { PostMainCompTypes } from '../types'
import { AiFillHeart } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';

const PostMainLikes = ({ post }: PostMainCompTypes) => {

    const [likedClick, setLikedClick] = useState<boolean>(true);

    const handleLike = () => {
        setLikedClick(!likedClick)
    }

    return (
        <>
            <div id={`PostMainLikes-${post?.id}`} className=''>
                <div className='absolute right-[9%]  bottom-32 w-10'>
                    <button onClick={() => handleLike()}>
                    {
                        likedClick ? (<AiFillHeart  color={post.likes?.length > 0 ? '#ff2626' : 'gray'} size={30} />) : ( <CiHeart size={30}/>)
                    }
                    </button>
                </div>
            </div>
        </>
    )
}

export default PostMainLikes