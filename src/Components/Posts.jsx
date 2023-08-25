import React, { useEffect, useState } from 'react';
import Like from './Like';
import Comment from './Comment';
import CreatePost from './CreatePost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Posts() {
    const [posts , setPosts] = useState([]);
    const [users , setUsers] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8080/posts')
        .then(res => res.json())
        .then(res => setPosts(res))
    });
    useEffect(() => {
      fetch('http://127.0.0.1:8080/users')
      .then(res => res.json())
      .then(res => setUsers(res))
    });
  return (
      <div>
        <div className='margin_create'><CreatePost /></div>
          <div>
          {posts.map(d =>
              <div className='card mb-4 pt-4 black shadow'>
                <div className='row-cols-2 row text-center'>
                  <div>
                    <img src={
                      users.map(function(u) {
                        if(d.userId === u.id) {
                          return u.photo;
                        }
                      })
                    }/>
                    <h5 className='text-white'>{
                      users.map(function(u) {
                        if(d.userId === u.id) {
                          return u.username;
                        }
                      })
                      }</h5>
                  </div>
                  <div><h4 className='text-white'>{d.title}</h4></div>
                </div>
            <div>
               <p className='card text-dark text-bold'>{d.content}</p>
            </div>
            <div className='row row-cols-2'>
              <div className="like"><Like /></div>
              <div><Comment /></div>
            </div>
        </div>
      )}
    </div>
      </div>
  );
}
