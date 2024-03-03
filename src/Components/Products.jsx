import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GroupAPI } from '../Data/api/group.api';
import ProductCard from './ProductCard/ProductCard';

function Products() {
    let { id } = useParams();
    const [products, setProducts] = useState([])

    async function getProducts(id) {
        try {
            const response = await GroupAPI.getProductsbyCat(id);
            console.log(response[0]);
            setProducts(response)
          } catch (error) {
            console.log(error);
          }
    }
    
    useEffect(() => {
      getProducts(id)
    }, [])
    
    
  return (
    <div className="mt-10">
    <div className="text-2xl font-bold text-primaryBg-dark dark:text-primaryBg-light">
      Select Products
    </div>
    <div className="flex items-center gap-7 flex-wrap">
      {products.length > 0 && products?.map((catData, index) => {
        return (
          <>
            <ProductCard prod={catData} key={index} />
          </>
        );
      })}
    </div>
  </div>
  )
}

export default Products
