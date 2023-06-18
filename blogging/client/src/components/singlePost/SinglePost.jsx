import React from 'react';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './singlePost.css';
import {useState, useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom'; 
import axios from 'axios';

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  useEffect(()=>{
    const getPost = async () => {
      const res = await axios.get('/post/'+path);
      setPost(res.data);
    };
    getPost();
  }, [path]);

  return (
    <>
      <div className="col-lg-8 col-12 my-3">
        <div className="row">
        {post.photo && (
          <img src={post.photo} alt="postImg" width="100%" height="300px" />
        )}
          <div className="d-flex justify-content-end mt-3">
            <BorderColorIcon className="editIcon me-3" />
            <DeleteForeverIcon className="delIcon" />
          </div>
          <h3 className="text-center my-3">{post.title}</h3>
          <div className="d-flex justify-content-between text-muted px-4">
            <Link to={`/?user=${post.username}`}>
              <p>Author: {post.username}</p>
            </Link>
            <p>{new Date(post.createdAt).toDateString()}</p>
          </div>
          <p className="px-4 lh-5 para">{post.description}</p>
        </div>
      </div>
    </>
  )
}
