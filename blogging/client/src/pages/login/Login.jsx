import React, {useState, useContext } from 'react';
import axios from "axios";
import { Context } from "../../context/Context";
import {Link} from 'react-router-dom';
import './login.css';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, dispatch, isFetching } = useContext(Context);

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
        const res = await axios.post("/login", {
            email,
            password
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
        dispatch({ type: "LOGIN_FAILURE" });
        }
    }
    console.log(user, isFetching);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-5 pt-5">
                        <form className="w-50" onSubmit={handleSubmit}>
                        <h3>Login</h3>
                            <div class="mb-3 mt-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" className="form-control" name="email" required onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" name="password" required onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div id="emailHelp" className="form-text mb-3">Not yet registered?<Link to='/register'> Register here</Link></div>
                            <button type="submit" className="btn button shadow-none" disabled={isFetching}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
