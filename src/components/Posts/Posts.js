import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Post.css'
import Carousel from 'react-bootstrap/Carousel';

function Posts() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`http://localhost:8080/api/post/listpost`)
            setData(await response.json())
        }
        getProduct()
    }, [])
    return (
        <div className='post'>
            <div className='post-padding'>
                <div className='post-scroll'>
                    <div className='post-main'>
                        {data.map(item => (
                            <NavLink to={`/PostList/${item.id}`}>
                                <div className='post-img-name'>
                                    <img className='post-img' src={"http://localhost:8080/uploads/" + item.imgURL} />
                                    <div className='post-name'>{item.postName} </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Posts