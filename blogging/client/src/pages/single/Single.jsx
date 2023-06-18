import React from 'react';
import SinglePost from '../../components/singlePost/SinglePost';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Single() {
  return (
    <>
        <div className="container-fluid">
            <div className="row">
                <SinglePost/>
                <Sidebar/>
            </div>
        </div>
    </>
  )
}
