import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Comment() {
  return (
    <div  className='shadow comsi row row-cols-2'>
      <div><input className='coms' type='text' placeholder='Laissez votre commentaire' /></div>
      <div><i><FontAwesomeIcon icon={faPaperPlane} className='bg-send'/></i></div>
    </div>
  );
}
