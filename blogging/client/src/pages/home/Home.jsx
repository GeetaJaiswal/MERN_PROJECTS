import React from 'react';
import './home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Post from '../../components/posts/Posts';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {

    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchPost = async () => {
            const res = await axios.get('http://localhost:8000/'+search)
            // console.log(res);
            setPosts(res.data);
        }
        fetchPost();
    },[search])
  return (
    <>
    <Header/>
    <div className="container-fluid">
        <div className="row py-3 px-2">
            <div className="col-lg-8">
                <Post posts={posts} />
            </div>
            <Sidebar/>
        </div>
    </div>
    </>
  )
}
