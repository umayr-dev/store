import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Logo from '../../public/icons/logo'
import LocationIcon from '../../public/icons/LocationIcon'
import Search from '../../public/icons/Search';
import SignIn from '../../public/icons/SignIn';
import Heart from '../../public/icons/Heart';
import Korzina from '../../public/icons/Korzina';
import { CartContext } from '../context/CartContext';


function Header({onAuthModalOpen}) {
//     const location = useLocation()
//   const [headerClassname, setHeaderClassName] = useState('')
//   useEffect(() => {
//     if(location.pathname === '/sign'){
//       setHeaderClassName('header-white')
//     }else{
//       setHeaderClassName('')
//     }
//   }, [location])
    const {getTotal} = useContext(CartContext)
    const [categories, setCategories] = useState([])
    const isAuth = JSON.parse(localStorage.getItem('user')) || false
    const navigate = useNavigate()

    function getCategories(){
        fetch('https://5709cdd829da4f5e.mokky.dev/categories').then(function(response){
            return response.json()
        }).then(function(data){
            setCategories(data)
        }).catch(function(err){
            console.log(err, 'Error')
        })
    }

    useEffect(()=> {
        getCategories()
    }, [] )

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
                        <Link to='/faq'>Savol-Javoblar</Link>
                        <Link >Buyurtmalarim</Link>
                        <span>

                        <img src="/images/uz-flag.png" width={24} height={24} alt="flag" />
                        O'zbekcha
                        </span>
                       </div>
                    </div>
                    <div className="header-bottom">
                        <Link to='/'><Logo/></Link>
                        
                           <Link to="/categories">
                            <button> <img src="/images/pajamas--catalog-checkmark.png" width={24} height={24} alt="" /> Katalog </button>                            
                           </Link>
                            <div className="input">
                                <input type="text" placeholder='Mahsulotlar va turkumlar izlash' />
                                <button> <Search/></button>
                            </div>
                            <div className="pages">


                               <span style={{cursor: 'pointer'}} onClick={isAuth ? ()=> navigate('/profile') : onAuthModalOpen}>
                               <SignIn/>
                                 {isAuth ? isAuth.name : "Kirish"} 
                                </span> 


                                <Link  to='/saved'>
                                <span>
                                <Heart/> 
                                 Saralangan
                                </span>
                                </Link>

                                <Link to='/cart'>
                                <span className='cart-text'>
                                <Korzina/>
                                 Savat
                                    <sup className={getTotal() <1 ? 'cart-index-active' : 'cart-index'}>{getTotal() <1 ? null : getTotal()}</sup>
                                </span>
                                </Link>

                            </div>
                    </div>
                    <div className="header-categories">

                        {
                            categories.map(item=> item.image ?.length >0 ? (
                                <p key={item.id}>
                                    <img src={item.image} height={24} width={24} alt={item.name} />
                                   <Link to="/categories"><span>{item.name}</span></Link> 
                                </p>

                            ) : (
                                <Link className='link' to='/categories'>{item.name}</Link>
                            )
                        )
                        }
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header