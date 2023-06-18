import React from 'react';
import Post from '../post/Post';

export default function Posts({ posts }) {
    return (
        <>
            <div className="row">
                {posts.map((p, index) => (
                    <Post post={p} key={index} />
                ))}
            </div>
        </>
    )
}

