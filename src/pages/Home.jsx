import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import Api from '../api';
import { urls } from '../constants/urls';
import BannerCategories from '../components/BannerCategories';
import BrandCategories from '../components/BrandCategories';
import AppBanner from '../components/AppBanner';

function Home() {
  const [banners, setBanners]= useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  function getBannners(){
    fetch('https://5709cdd829da4f5e.mokky.dev/banners').then(function(res){
      return res.json()
    }).then(function(data){
      setBanners(data)
    }).catch(function(err){
      console.log(err, 'olov');
      
    })
  }


  function getProducts(){
    Api.get(urls.products.get)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err, "Error in get products"))
      .finally(() => setLoading(false));
  }
  
  useEffect(()=>{
    getBannners()
    getProducts()
  }, [])

  return (
  
    <>

      <Banner list={banners.filter(item=> item.position === 'hero')}/>
      <BannerCategories/>
      <ProductList isHome={true}  list={products}/>
      <BrandCategories/>
    <ProductList isHome={true} list={products}/>
    <AppBanner/>
    <ProductList isHome={true} list={products}/>
    </>
  )
}

export default Home