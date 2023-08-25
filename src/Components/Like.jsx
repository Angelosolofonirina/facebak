import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Like() {
  return (
    <div className='card bg-primary shadow'>
      <p className='pt-2 likeleft'><i><FontAwesomeIcon icon={faThumbsUp} /></i>J'aime</p>
    </div>
  );
}
