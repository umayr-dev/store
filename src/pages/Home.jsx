import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import { productList } from '../constants/product'

function Home() {

  const [banners, setBanners]= useState([])

  function getBannners(){
    fetch('https://5709cdd829da4f5e.mokky.dev/banners').then(function(res){
      return res.json()
    }).then(function(data){
      setBanners(data)
    }).catch(function(err){
      console.log(err, 'olov');
      
    })
  }
  useEffect(()=>{
    getBannners()
  }, [])

  return (
  
    <>

      <Banner list={banners.filter(item=> item.position === 'hero')}/>
      <ProductList list={productList}/>
      <Banner list={banners.filter(item=> item.position === 'bottom')}/>
    <ProductList list={productList}/>
    </>
  )
}

export default Home