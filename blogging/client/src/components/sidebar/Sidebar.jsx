import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [cat, setCat] = useState([]);

    useEffect(()=>{
        const getCats = async () => {
            const res = await axios.get('/category');
            setCat(res.data);
            console.log(res);
        };
        getCats();
    },[]);
    return (
        <>
            <div className="col-lg-4 py-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <img src="/images/sidebar.jpg" alt="siderbar" width="100%" />
                            <p className='pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur inventore fugit, alias corrupti consequuntur, harum excepturi veritatis iste, tempore deleniti deserunt repellat ipsam eaque modi tenetur quidem! Accusantium, provident nihil!</p>
                            <hr />
                            <h5 className="text-center">CATEGORIES</h5>
                            <hr />
                            <div className="category">
                                <ul className="cat">
                                    {cat.map((c)=> (
                                        <Link to={`/?cat=${c.name}`}>
                                            <li>{c.name}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                            <hr />
                            <h5 className="text-center">FOLLOW US</h5>
                            <hr />
                            <ul className="cat">
                                <li><i className="fab fa-facebook-square"></i></li>
                                <li><i className="fab fa-instagram-square"></i></li>
                                <li><i className="fab fa-twitter-square"></i></li>
                                <li><i className="fab fa-pinterest-square"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
