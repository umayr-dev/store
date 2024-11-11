import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import LocationIcon from '../../public/icons/LocationIcon';
import SearchIcon from '../../public/icons/Search';
import SignIn from '../../public/icons/SignIn';
import Heart from '../../public/icons/Heart';
import { CartContext } from '../context/CartContext';
import { useLanguage } from '../context/LanguageContext'; 

function Header({ onAuthModalOpen , onChatModalOpen}) {
  const { language, changeLanguage } = useLanguage(); 
  const { getTotal } = useContext(CartContext);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]); // Mahsulotlar ro'yxati
  const [searchTerm, setSearchTerm] = useState(''); // Qidiruv so'rovi
  const [filteredProducts, setFilteredProducts] = useState([]); // Qidiruv natijalari
  const isAuth = JSON.parse(localStorage.getItem('user')) || false;
  const navigate = useNavigate();

  // Kategoriyalarni olish
  function getCategories() {
    fetch('https://5709cdd829da4f5e.mokky.dev/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(err => console.log(err, 'Error'));
  }

  // Mahsulotlarni olish (agar API mavjud bo'lsa)
  function getProducts() {
    fetch('https://5709cdd829da4f5e.mokky.dev/products') // To'g'ri API endpointini qo'ying
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err, 'Error'));
  }

  useEffect(() => {
    getCategories();
    getProducts(); // Mahsulotlarni olish
  }, []);

  const translations = {
    uz: {
      location: "Toshkent",
      stores: "Bizning do'konlarimiz",
      legalEntities: "Yuridik shaxslar uchun",
      paymentMethods: "To'lov usullari",
      contactCenter: "Aloqa markazi: ",
      phone: "+99871 209 99 44",
      catalog: "Katalog",
      searchPlaceholder: "Qidirish",
      signIn: "Kirish",
      saved: "Sevimlilar",
      cart: "Savatcha",
    },
    ru: {
      location: "Ташкент",
      stores: "Наши магазины",
      legalEntities: "Для юридических лиц",
      paymentMethods: "Методы оплаты",
      contactCenter: "Контактный центр: ",
      phone: "+99871 209 99 44",
      catalog: "Каталог",
      searchPlaceholder: "Поиск",
      signIn: "Войти",
      saved: "Избранное",
      cart: "Корзина",
    },
    en: {
      location: "Tashkent",
      stores: "Our stores",
      legalEntities: "For legal entities",
      paymentMethods: "Payment methods",
      contactCenter: "Contact center: ",
      phone: "+99871 209 99 44",
      catalog: "Catalog",
      searchPlaceholder: "Search",
      signIn: "Sign In",
      saved: "Favorites",
      cart: "Cart",
    }
  };

  const langContent = translations[language];

  // Qidiruv funksiyasi
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() !== '') {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  // Qidiruv natijasidan tashqariga bosganda natijalarni yopish
  const handleClickOutside = (event) => {
    if (!event.target.closest('.search-container')) {
      setFilteredProducts([]);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="header">
        {/* Header Top */}
        <div className="header-top">
          <div className="container">
            <div className="headertop">
              <div className="left">
                <p><LocationIcon /> <span>{langContent.location}</span></p>
                <p>{langContent.stores}</p>
                <p className="yuridik">{langContent.legalEntities}</p>
                <p>{langContent.paymentMethods}</p>
              </div>
              <div className="right">
                <Link>{langContent.contactCenter}</Link>
                <h2>{langContent.phone}</h2>

                <div className="language">
                  <img src="/images/globe-regular-24.png" width={24} height={24} alt="" />
                  <select onChange={(e) => changeLanguage(e.target.value)} value={language}>
                    <option value="uz">O'z</option>
                    <option value="ru">Ру</option>
                    <option value="en">Eng</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Bottom */}
        <div className="container">
          <div className="header-bottom">
            <Link to='/'>
              <img src="https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg" alt="Logo" />
            </Link>

            <Link to="/categories">
              <button className="katalog">
                <img src="/images/menu-regular-24.png" width={24} height={24} alt="Menu" />
                {langContent.catalog}
              </button>
            </Link>

            {/* Qidiruv Input */}
            <div className="search-container" style={{ position: 'relative' }}>
              <div className="input">
                <button className="input-btn">
                  <SearchIcon />
                </button>
                <input 
                  type="text" 
                  placeholder={langContent.searchPlaceholder} 
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>

              {/* Qidiruv Natijalari */}
              {filteredProducts.length > 0 && (
                <ul className="search-results" >
                  {filteredProducts.map(product => (
                    <li key={product.id} style={{ padding: '10px' }}>
                      <Link 
                        to={"/product/" + product.id}

                        style={{ textDecoration: 'none', color: '#000' }}
                        onClick={() => {
                          setSearchTerm('');
                          setFilteredProducts([]);
                        }}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="pages">
              <span style={{ cursor: 'pointer' }} onClick={isAuth ? () => navigate('/profile') : onAuthModalOpen}>
                <SignIn />
                {isAuth ? isAuth.ism : langContent.signIn}
              </span>

              <Link to='/saved'>
                <span>
                  <Heart />
                  {langContent.saved}
                </span>
              </Link>

              <Link to='/cart'>
                <span className="cart-text">
                  <img src="https://texnomart.uz/_nuxt/img/header-basket.04697d5.svg" alt="Cart" />
                  {langContent.cart}
                  <sup className={getTotal() < 1 ? 'cart-index-active' : 'cart-index'}>
                    {getTotal() < 1 ? null : getTotal()}
                  </sup>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Header Categories */}
        <div className="container">
          <div className="header-categories">
            {categories.map(item => (
              item.image?.length > 0 ? (
                <p key={item.id}>
                  <img src={item.image} height={24} width={24} alt={item.name} />
                  <Link to="/categories"><span>{item.name}</span></Link>
                </p>
              ) : (
                <Link className='link' to='/categories' key={item.id}>{item.name}</Link>
              )
            ))}
          </div>
        </div>
        <div className='chat' style={{ cursor: 'pointer' }}> 
          
        <img onClick={onChatModalOpen} src= 'https://texnomart.uz/_nuxt/img/chat-open.50e3325.svg' alt="" />
        
    </div>
      </div>
    </header>
  );
}

export default Header;

