import React, { useEffect, useState } from 'react'
import CatCard from './CatCard/CatCard';
import { GroupAPI } from '../Data/api/group.api';

function Category() {
    const [allCat, setAllCat] = useState([]);

    useEffect(() => {
      getCat();
    }, []);
  
    const getCat = async () => {
      try {
        const response = await GroupAPI.getCategories();
        setAllCat(response);
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <div className="mt-10">
          <div className="text-2xl font-bold text-primaryBg-dark dark:text-primaryBg-light">
            Select Categories
          </div>
          <div className="flex items-center gap-7 flex-wrap">
            {allCat?.map((catData, index) => {
              return (
                <>
                  <CatCard data={catData} key={index} />
                </>
              );
            })}
          </div>
        </div>
  )
}

export default Category
