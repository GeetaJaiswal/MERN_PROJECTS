import React from 'react';
import {Link} from 'react-router-dom';
import './post.css';

export default function Post({ post }) {
    return (
        <>
            <div className="col-lg-6 my-3">
            {post.photo && <img src={post.photo} alt="post" width="100%" height="220px" />}
                <small className="text-muted text-capitalize"><center>
                    {post.categories.map((c, index)=>(
                        <span key={index}>{c}, </span>
                    ))}
                </center></small>
                <Link to={`post/${post._id}`}>
                    <h4 className='text-center'>{post.title}</h4>
                </Link>
                <small className="text-muted text-capitalize"><center>{new Date(post.createdAt).toDateString()}</center></small>
                <p className='text-justify'>{post.description}</p>
            </div>
        </>
    )
}
