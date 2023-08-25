import React from 'react';
import Login from './Login';

export default function Landing() {
  return (
    <div className='row row-cols-2'>
      <div className='hei-fb'>
        <h3 className='hei-fb-content'>Bienvenue sur Facebak HEI</h3>
        <div className='reseau-social'>Le réseau social des jeunes Malagasy , ici vous pouvez voir et partager
        des actualités</div>
      </div>
      <div className='login shadow'>
        <div className='text-center'>
            <Login />
            <div className='row row-cols-2'>
              <div>
                <p className='marge'>Vous n'avez pas un compte ?</p>
              </div>
              <div>
                <input type="button" className='create-account' value="Créer un nouveau compte"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
