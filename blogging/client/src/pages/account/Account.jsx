import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default function Account() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <form className="w-50">
                            <h6 className="text-danger text-end">Delete Account</h6>
                            <h3 className="mb-3">Update Account</h3>
                            <label htmlFor="fileInput">
                                <img src="images/2.jpg" alt="profile" width="100px"/>
                                <AddBoxIcon className="plus-icon ms-2" style={{ cursor:'pointer', fontSize:25, color:'chocolate' }} />
                            </label>
                            <input type="file" name="" id="fileInput" style={{ display: 'none' }} />
                            <div className="mb-3 mt-3">
                                <label for="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputName" />
                            </div>
                            <div className="mb-3 mt-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn button shadow-none">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
