import React, { useEffect, useState,useRef } from 'react';


export default function Login() {
  const [users,setUsers] = useState([]);
  const email = useRef();
  const password = useRef();
  useEffect(() => {
    fetch("http://127.0.0.1:8080/users")
    .then(res => res.json())
    .then(res => setUsers(res))
  });
  /**const submit = () => {
    users.map(u => {
      if(email === u.email && password === u.password){
    
      }
    })
  }*/
  return (
    <div>
      <div className='text-center mt-4'>
        <div className='connecter-vous'><h4>Connectez-vous sur Facebak</h4></div>
        <div>
            <form>
                <input type="email" ref={email} className='shadow input-width' placeholder='Adresse email' />
            </form>
        </div>
        <div>
            <form>
                <input type="password" ref={password} className='shadow input-width margin-input' placeholder='Mot de passe' />
            </form>
        </div>
        <div>
            <input type="submit" className='shadow bg-primary se-connecter shadow' value="Se connecter" />
        </div>
      </div>
    </div>
  );
}
