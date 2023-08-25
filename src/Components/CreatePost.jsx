import React from 'react';

export default function CreatePost() {
  return (
    <div className='mt-4'>
      <div>
        <div className='text-center color'>Publier sur <span className='fb'>Facebak</span></div>
        <div><input className='quoi' type='text' placeholder='Quoi de neuf ?'></input></div>
        <div><input className='description' type='texte' placeholder='Description de vos nouvelles'></input></div>
        <div className='text-center'><input type='submit' value='Publier maintenant' className='pub bg-primary'></input></div>
      </div>
    </div>
  );
}
