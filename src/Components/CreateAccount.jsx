import React from 'react';

export default function CreateAccount() {
  return (
    <div className='account-create shadow'>
      <div>
        <div>
            <h3 className='p-left'>Créer un compte facebak</h3>
        </div>
        <div>
            <input type='text' className='input-create m-top shadow' placeholder="Quel est votre nom d'utilisateur"/>
        </div>
        <div>
            <input type='email' className='input-create m-top shadow' placeholder='Quelle est votre adresse email'/>
        </div>
        <div>
            <div className='align-left'>Créer un mot de passe</div>
            <div><input className='input-create shadow' type='password' /></div>
        </div>
        <div>
            <div className='align-left'>Confirmer le nouveau mot de passe</div>
            <div><input type='password' className='input-create shadow' /></div>
        </div>
        <div className='row row-cols-2'>
            <div>
              <input type="button" className='m-top bg-color shadow' value="Retour"/>
            </div>
            <div>
              <input type="submit" className='m-top m-left bg-primary shadow' value="créer maintenant"/>
            </div>
        </div>
      </div>
    </div>
  );
}
