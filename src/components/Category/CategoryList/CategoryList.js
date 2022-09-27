import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import background1 from '../../Asset/bannertour4.jpg';
import Header from '../../Header';
import SearchRoute from '../../Search/Search.routes';
import Footer from '../../Footer/footer';

function CategoryList() {
    const { id } = useParams()
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8080/api/category/categoryTour/${id}`)
            setData(await response.json())
        }
        getProduct();
    }, []);

    return (
        <div>
            <Header />
            <img className='bg' src={background1} />
            <SearchRoute />
            <div className='container'>

                <h1> <p className='title'>Danh mục Tour</p></h1>
                <div className='row tour'>
                    {data.map(product => {
                        return (
                            <div className='col-4'>
                                <div className='content'>
                                    <div>
                                        <img className='imgtour' src={"http://localhost:8080/uploads/" + product.imgURL} />
                                    </div>
                                    <div className='time-remain'> <b className='time'> <AccessTimeIcon />{product.time} </b>
                                        <div className='remaing-tour'>
                                            {
                                                product.remaining == 0
                                                    ?
                                                    <div>Số lượng: Đã hết </div>
                                                    :
                                                    <div>Số lượng: {product.remaining}</div>
                                            }
                                        </div>
                                    </div>

                                    <div className='nametour'>{product.nametour}  </div>

                                    <div className='price-time'>
                                        <div><b className='price'>{(product.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ</b></div>
                                        <NavLink to={`/DetailProduct/${product.id}`}>
                                            <button type="button" className="btn btn-outline-danger">ĐẶT NGAY!!!</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CategoryList