import React, { useState, useEffect } from 'react';

function ProductSearch() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Tovarlarni olish
  useEffect(() => {
    fetch('https://5709cdd829da4f5e.mokky.dev/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // Qidiruvni amalga oshirish
  const handleSearch = (event) => {
    setQuery(event.target.value);
    
    // Qidiruv so'ziga qarab tavarlarni filtrlash
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredProducts(result);
  };

  return (
    <div className="product-search">
      <div className="search-box">
        <input
          type="text"
          placeholder="Tavarni qidiring..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} width={100} height={100} />
              <p>{product.name}</p>
            </div>
          ))
        ) : (
          <p>Hech qanday tavar topilmadi</p>
        )}
      </div>
    </div>
  );
}

export default ProductSearch;
