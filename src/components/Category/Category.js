import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Category.css'

function Category() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`http://localhost:8080/api/category/listCategory`)
      setData(await response.json())
    }
    getProduct();
  }, []);
  
  return (
    <div className='row category'>
      <div className='title-category'>
        <p className='title-cate1'> Trải nghiệm du lịch Việt Nam</p>
        <p className='title-cate2'> Khám phá các địa danh mới</p>
      </div>

      {
        data.map(item => (
          <div className='col-3'>
            <div className='cate-main'>
              <NavLink to={`/CategoryList/${item.id}`}>
                <img className='cate-img' src={"http://localhost:8080/uploads/" + item.imgURL} />
              </NavLink>
              <div className='title-img'>{item.categoryName} </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Category