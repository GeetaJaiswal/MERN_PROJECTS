import React, {useContext, useState} from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './write.css';
import axios from 'axios';
import {Context} from '../../context/Context';

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/post", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <>
        <div className="container">
        <form className="writeForm" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-12 p-0">
                    <img src="images/header.jpg" alt="postImg" width="100%" height="400px"/>
                </div>
                <div className="row mt-3 p-0">
                    <div className="col-6 text-secondary d-flex align-items-center">
                    <label htmlFor="fileInput">
                        <AddBoxIcon className="plus-icon" style={{cursor:'pointer', fontSize:35}}/>
                    </label>
                    <input type="file" name="" id="fileInput" style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])}/>
                    <h3 className="ps-3"><input type="text" placeholder="Title" className='border-0' onChange={e=>setTitle(e.target.value)}/></h3>
                    </div>
                    <div className="col-6 p-0 d-flex justify-content-end">
                        <button type="submit" className="btn btn-success">Publish</button>
                    </div>
                    <div className="col-12 mt-4 px-3">
                        <textarea name="" id="" autoFocus placeholder='Write here...' rows="7" className="border-0 teatarea" style={{width:'100%', outline:'none'}} onChange={e=>setDesc(e.target.value)}></textarea>
                    </div>
                </div>                
            </div>
        </form>    
        </div>
    </>
  )
}
