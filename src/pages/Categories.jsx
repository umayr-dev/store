import React, { useEffect, useState } from 'react'
import { Slider } from 'antd'
import ProductList from '../components/ProductList'
import Api from '../api';
import { urls } from '../constants/urls';


function Categories() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([]);


  function getProducts(){
    Api.get(urls.products.get)
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

  useEffect(()=>{
    getCategories();
    getProducts
  }, []);
  return (
    <div className="container">
      <div className="categories">

      <div className="categories-bar">
        <p>Turkumlar</p>
        <div className="all-categories">
        {
          categories.map(Item => (
            <p key={Item}>{Item.name}</p>
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
          <span><input type='checkbox'/>ABC</span>
          <span><input type='checkbox'/>ABC-Studio</span>
          <span><input type='checkbox'/>Absolut</span>
          <span><input type='checkbox'/>Always</span>
          <span><input type='checkbox'/>Aos</span>
          <span><input type='checkbox'/>Apple</span>
          <span><input type='checkbox'/>ABC</span>
          <span><input type='checkbox'/>ABC</span>
          <span><input type='checkbox'/>ABC-Studio</span>
          <span><input type='checkbox'/>Absolut</span>
          <span><input type='checkbox'/>Always</span>
          <span><input type='checkbox'/>Aos</span>
          <span><input type='checkbox'/>Apple</span>
          <span><input type='checkbox'/>ABC</span>
          <span><input type='checkbox'/>ABC</span>
          <span><input type='checkbox'/>ABC-Studio</span>
          <span><input type='checkbox'/>Absolut</span>
          <span><input type='checkbox'/>Always</span>
          <span><input type='checkbox'/>Aos</span>
          <span><input type='checkbox'/>Apple</span>
          <span><input type='checkbox'/>ABC</span>
          </div>
          <button>Yana </button>
      </div>

      <ProductList list={products}/>

      </div>

    </div>
  )
}

export default Categories