import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        try
        {
            setError(false);
            const res = await axios.post('/register', {
                username,
                email,
                password
            })
            res.data && window.location.replace('/login')
        }
        catch(e){
            console.log(e);
            setError(true);
        }                
    }

    return (
        <>
            <div className="container">
                <div className="row">
                {error && <h5 className='text-danger text-center mt-5'>Something went wrong</h5>}
                    <div className="col-12 d-flex justify-content-center pt-5">
                        <form className="w-50" onSubmit={handleSubmit}>
                            <h3>Register</h3>
                            <div className="mb-3 mt-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputName" name="username" required onChange={(e)=>setUsername(e.target.value)}/>
                            </div>
                            <div className="mb-3 mt-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" name="email" required onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" required name="password" onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <div id="emailHelp" className="form-text mb-3">Already registered? <Link to="/login">Login here</Link></div>
                            <button type="submit" className="btn button shadow-none">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
