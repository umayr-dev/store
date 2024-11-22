import React, { useEffect, useState } from 'react'
import { Slider } from 'antd'
import ProductList from '../components/ProductList'
import Api from '../api';
import { urls } from '../constants/urls';
import { useLocation, useSearchParams } from 'react-router-dom';

function Categories() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams]= useSearchParams()
  const {search} = useLocation();

  function handleChange(e){
    if(e.target.checked){
      searchParams.append(`brand_id[]${e.target.name}`, e.target.name)
    }else{
      searchParams.delete(`brand_id[]${e.target.name}`)
    }
    setSearchParams(searchParams)
  }
  function handleCategory(id){
    searchParams.set('category_id', id)
    setSearchParams(searchParams);
  }
  function getProducts(){
    Api.get(urls.products.get + search)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err, "Error in get products"))
      .finally(() => setLoading(false));
  }
  function getCategories(){
    Api.get(urls.categories.get)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err, "Error in get categories"))
  }

  function getBrands(){
    Api.get(urls.brands.get)
      .then((res) => {
        setBrands(res.data);
      })
      .catch((err) => console.log(err, "Error in get brand"))
  }

  useEffect(()=>{
    getCategories();
    getProducts();
    getBrands();
  }, []);

  useEffect(() => {
  getProducts()
  }, [search])
  return (
    <div className="container">
      <div className="categories">

      <div className="categories-bar">
        <p>Turkumlar</p>
        <div className="all-categories">
        {
          categories.map(Item => (
            <p onClick={()=>handleCategory(Item.id)} style={{fontWeight: +searchParams.get('category_id')=== Item.id ? 600 : 400, color: +searchParams.get('category_id')=== Item.id ? 'black':'gray', cursor: 'pointer'}} key={Item.id}>{Item.name}</p>
          ))
        }
        </div>
          <h2>Narx, baho, so'm</h2>
          <div className="categories-button">
            <button>dan 1550</button>
            <button>oldin 12999000</button>
          </div>
          <Slider style={{width: '300px'}}
    range={{
      draggableTrack: true,
    }}
    defaultValue={[100, 1000]}
  />
          <h2>Brend</h2>
          <div className="all-brand active">
            {
              brands.map(item => (
                <label key={item.id}
                ><input
                name={item.id} onChange={handleChange} type='checkbox'/>{item.name}</label>
              ))
            }
          </div>
          <button>Yana </button>
      </div>

      <ProductList list={products} isGrid={true}/>

      </div>

    </div>
  )
}

export default Categories