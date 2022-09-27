import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import background1 from '../../Asset/bannertour4.jpg';
import Header from '../../Header';
import SearchRoute from '../../Search/Search.routes';
import Footer from '../../Footer/footer';
import './PostList.css'

function PostList() {
    const { id } = useParams()
    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8080/api/post/postTour/${id}`)
            setData(await response.json())
        }
        getProduct();
    }, []);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8080/api/post/detailPost/${id}`)
            setPost(await response.json())
        }
        getProduct();
    }, []);

    return (
        <div>
            <Header />
            <div className='container-post'>
                <div className='container-post-main'>
                    <div className='post-text'>
                        <div>
                            <div className='post-title'>{post.postName} </div>
                            <div className='post-img-list'><img className='post-img-list-m' src={"http://localhost:8080/uploads/" + post.imgURL} /></div>
                            <div className='post-des' >{post.description} </div>
                        </div>

                    </div>

                    <div className='list-post-tour'>
                        {data.map((product, index) => {
                            return (
                                <div >
                                    <NavLink to={`/DetailProduct/${product.id}`}>
                                        <div className='imgtour-nametour-post'>
                                            <img className='imgtour-post' src={"http://localhost:8080/uploads/" + product.imgURL} />
                                            <div className='nametour-post'>{product.nametour}  </div>
                                        </div>
                                    </NavLink>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    )
}

export default PostList