import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../public/icons/logo'
import LocationIcon from '../../public/icons/LocationIcon'
import Search from '../../public/icons/Search';
import SignIn from '../../public/icons/SignIn';
import Heart from '../../public/icons/Heart';


function Header() {
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-top">
                       <div className='left'>
                       <LocationIcon/>
                       <p>Shahar: <span className='under'>Toshkent</span></p>
                       <p>Topshirish Punktlari</p>
                       </div>
                       <div className='right'>
                        <Link className='buy'>Uzumda Soting</Link>
                        <Link>Savol-Javoblar</Link>
                        <Link>Buyurtmalarim</Link>
                        <span>

                        <img src="/images/uzb-flag.png" width={24} height={24} alt="flag" />
                        O'zbekcha
                        </span>
                       </div>
                    </div>
                    <div className="header-bottom">
                        <Logo/>
                        
                            <button>Katalog </button>                            
                            <div className="input">
                                <input type="text" placeholder='Mahsulotlar va turkumlar izlash' />
                                <button> <Search/></button>
                            </div>
                            <SignIn/>
                            <Heart/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header