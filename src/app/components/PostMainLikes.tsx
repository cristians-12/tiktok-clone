import React, { useState } from 'react'
import { PostMainCompTypes } from '../types'
import { AiFillHeart } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';
import { FaCommentDots, FaRegCommentDots, FaShare, FaShareAlt } from 'react-icons/fa';

const PostMainLikes = ({ post }: PostMainCompTypes) => {

    const [likedClick, setLikedClick] = useState<boolean>(false);

    const handleLike = () => {
        
        const likes = document.getElementById('likes');
        const likess = likes ? parseInt(likes.innerHTML) : 0;
        if (likes && likedClick) {
            likes.innerHTML = (likess - 1).toString();
        }else if(likes){
            likes.innerHTML = (likess + 1).toString();
        }
        setLikedClick(!likedClick)
    }

    return (
        <>
            <div id={`PostMainLikes-${post?.id}`} className=''>
                <div className='absolute right-[9%] flex flex-col items-center gap-5 bottom-14 w-10'>
                    <button onClick={() => handleLike()}>
                    {
                        likedClick ? (<AiFillHeart  color={post.likes?.length > 0 ? '#ff2626' : 'gray'} size={30} />) : ( <AiFillHeart size={30}/>)
                    }
                    <span className='text-white' id='likes'>{post?.likes.length}</span>
                    </button>
                    <button>
                        <FaCommentDots size={25}/>
                    </button>
                    <button>
                        <FaShare size={25}/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default PostMainLikes