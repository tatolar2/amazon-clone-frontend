import React from 'react'
import { categoryInfos } from "./categoryFullinfos";
import CategoryCard from './CategoryCard';
import "./Category.css"
function Category() {
  return (
    <div className='category_container'>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} key={infos.id}/>
      ))}
    </div>
  );
}

export default Category