import React, { useState } from 'react'
import { PostMainCompTypes } from '../types'
import { AiFillHeart } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';

const PostMainLikes = ({ post }: PostMainCompTypes) => {

    const [likedClick, setLikedClick] = useState<boolean>(false);

    const handleLike = () => {
        setLikedClick(!likedClick)
        const likes = document.getElementById('likes');
        const likess = likes ? parseInt(likes.innerHTML) : 0;
        if (likes) {
            likes.innerHTML = (likess + 1).toString();
        }
    }

    return (
        <>
            <div id={`PostMainLikes-${post?.id}`} className=''>
                <div className='absolute right-[9%]  bottom-32 w-10'>
                    <button onClick={() => handleLike()}>
                    {
                        likedClick ? (<AiFillHeart  color={post.likes?.length > 0 ? '#ff2626' : 'gray'} size={30} />) : ( <CiHeart size={30}/>)
                    }
                    <span className='text-white' id='likes'>{post?.likes.length}</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PostMainLikes