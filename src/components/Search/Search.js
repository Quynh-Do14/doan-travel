import React, { useEffect, useState } from 'react'
import './Search.css'
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchResult } from '../../Redux/Action';
const Search = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([]);
    // const [placeOutput, setPlaceOutput] = useState([]); 2
    // const [arrivalOutput, setArrivalOutput] = useState([]); 2

    const [arrival, setArrival] = useState('');
    const [place, setPlace] = useState([]);
    const [date, setDate] = useState('');
    const [userSearchData, setUserSearchData] = useState([]);

    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {

            const response = await fetch(`http://localhost:8080/review/listtour`)
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());

            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct();
        setData(data)

        setUserSearchData(data);
    }, []);

    const history = useHistory()
    const dispatch = useDispatch();

    const handleSearch = () => {

        const newData = data
            .filter(x => x.place == (place == '' ? x.place : place))
            .filter(y => y.arrival == (arrival == '' ? y.arrival : arrival))

        dispatch(searchResult({ result: newData }))
        history.push('/SearchMain')

        if (place === '' && arrival === '') {
            setUserSearchData([]);
        }
        else {
            setTimeout(() => {
                setUserSearchData(newData);
            }, 2000);
        }
    }

    // function newPlace(e){
    //     console.log('newArr', e);
    //    var newArr =[];
    //    newArr = e.filter(function(item){
    //         return newArr.includes(item) ? '' : newArr.push(item)
    //    })
    //    return newArr;
    // }
    return (
        <>
            <div className='search-form'>

                <div className='form'>
                    <p>Điểm xuất phát</p>
                    <select className='form-select' onChange={(e) => setPlace(e.target.value)}>
                        <option value=''>Chọn điểm xuất phát</option>
                        {filter.map((product) => {
                            return (
                                <option value={product.place}>{product.place}</option>
                            )
                        })}
                    </select>
                </div>
                <div className='form'>
                    <p>Điểm đến</p>
                    <select className="form-select" onChange={(e) => setArrival(e.target.value)}>
                        <option value=''>Chọn điểm đến</option>
                        {filter.map((product) => {
                            return (
                                <option value={product.arrival}>{product.arrival}</option>
                            )
                        })}

                    </select>
                </div>
                <div className='form' onChange={(e) => setDate(e.target.value)}>
                    <p>Ngày khởi hành</p>
                    <input className="form-select" aria-label="Default select example" type='date' placeholder="Chọn ngày" />

                </div>
                <div className='form'>
                    <p>Giá tiền</p>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Giá</option>
                        <option>0~1,000,000</option>
                        <option>1,000,000~2,000,000</option>
                        <option>2,000,000~3,000,000</option>
                        <option>3,000,000~4,000,000</option>
                        <option>4,000,000~5,000,000</option>
                        <option>5,000,000~6,000,000</option>
                        <option>6,000,000~7,000,000</option>
                        <option>7,000,000~8,000,000</option>
                        <option>8,000,000~9,000,000</option>
                        <option>9,000,000~10,000,000</option>
                    </select>
                </div >
                <button type="button" className="btn btn-danger"
                    onClick={() => handleSearch()}>Tìm kiếm</button>


            </div>


        </>
    )
}


export default Search