import {useContext} from 'react';
import './topbar.css';
import { NavLink } from 'react-router-dom';
import {Context} from '../../context/Context';

export default function Topbar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-12 topbar d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row pt-2">
                            <div className="col-lg-3 col-6 order-lg-1 order-1">
                                <h3>BLOG</h3>
                            </div>
                            <div className="col-lg-6 col-12 topCenter pt-2 order-lg-2 order-3">
                                <ul className="d-flex justify-content-between">
                                    <li><NavLink to='/' className="nav">Home</NavLink></li>
                                    <li><NavLink to='/' className="nav">contact</NavLink></li>
                                    <li><NavLink to='/write' className="nav">write</NavLink></li>
                                    {!user && <li><NavLink to='/login' className="nav">login</NavLink></li>}
                                    {user &&<li><NavLink to='/' className="nav" onClick={handleLogout}>logout</NavLink></li>}
                                </ul>
                            </div>
                            <div className="col-lg-3 col-6 text-end order-lg-3 order-2">
                                <img src="/images/profile.jpg" alt="profile" width="40px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
        </>
    )
}