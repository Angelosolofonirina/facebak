import React from 'react';
import facebookLogo from '../facebook.svg';
import userSvg from '../circle-user-solid.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
  return (
    <div className='fixed-top'>
      <nav>
        <div className='row row-cols-4 nav-pad nav-height bg-primary'>
            <div>
               <div className='row row-cols-2'>
                   <i><img className='icon_style' src={facebookLogo} alt='icon facebak'/></i>
               </div>
               <div className='recherche'>
                   <input className='srh' type='search' placeholder='Rechercher sur facebak'></input>
               </div>
            </div>
            <div className='icon_margin bor1'>
                <FontAwesomeIcon icon={faHouse} className='icon_style color_icon'/>
            </div>
            <div className="logofacebak">
              <h2 className='titre'><span className='ita'>Facebak</span> HEI</h2>
            </div>
            <div className='bor'>
                <i><img className='icon_style' src={userSvg} alt='profil picture'/></i>
            </div>
        </div>
      </nav>
    </div>
  );
}
