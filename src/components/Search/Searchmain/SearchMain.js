import React, { useEffect, useState } from 'react'
import './SearchMain.css'
import { NavLink } from 'react-router-dom';
import Header from '../../Header';
import Footer from '../../Footer/footer';
import { useSelector } from 'react-redux';
const SearchMain = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([]);
    const [userSearchData, setUserSearchData] = useState([]);
    const [arrival, setArrival] = useState('');
    const [place, setPlace] = useState('');
    const [start, setStart] = useState(new Date())

    const state = useSelector((state) => state.searchResult)
    const ResultSearch = (result) => {
        return (
            result.map(item => (
                <div className='result-main'>
                    <img className='img-search' src={"http://localhost:8080/uploads/" + item.imgURL} />
                    <div className='info-search' >

                        <NavLink to={`/DetailProduct/${item.id}`}>
                            <div className='name-search' >{item.nametour}</div>
                        </NavLink>

                        <div className='time-search' >
                            <div className='tt-time'>Thời gian:</div>
                            <div className='time-search-m'>{item.time}</div>
                        </div>
                        <div className='price-search' > {(item.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ</div>
                    </div>
                </div>
            ))
        )
    }

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
        setData(data);
        setUserSearchData(data);
    }, []);

    const handleSearch = () => {

        const newData = data
            .filter(x => x.place == (place == '' ? x.place : place))
            .filter(y => y.arrival == (arrival == '' ? y.arrival : arrival))
        // .filter(z => z.start == (start == '' ? z.start : start))
        if (place === '' && arrival === '') {
            setUserSearchData([]);
        }
        else {
            setTimeout(() => {
                setUserSearchData(newData);
            }, 2000);

        }
    }

    const changeDate = (newStart) => {
        setStart(newStart)
    }

    const formatDate = d => {
        var month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            minutes = '' + d.getMinutes(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        if (minutes.length < 2) minutes = '0' + minutes;
        return [day, month, year].join('/');
    };
    return (
        <>
            <Header />
            <div className='search-main'>
                <div className='br-top'> </div>
                <div className='search-page'>
                    <div className='selection'>
                        <div className='search-tt-main'>Tìm kiếm</div>
                        <div className='form'>
                            <p className='option-tt'>Điểm xuất phát</p>
                            <select className='form-select' onChange={(e) => { setPlace(e.target.value); console.log(e.target.value) }}>

                                <option value=''>Chọn điểm xuất phát</option>
                                {filter.map((product) => {
                                    return (
                                        <option value={product.place}>{product.place}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='form'>
                            <p className='option-tt'>Điểm đến</p>
                            <select className="form-select" onChange={(e) => setArrival(e.target.value)}>
                                <option value=''>Chọn điểm đến</option>
                                {filter.map((product) => {
                                    return (
                                        <option value={product.arrival}>{product.arrival}</option>
                                    )
                                })}

                            </select>
                        </div>
                        <div className='form'>
                            <p className='option-tt'>Ngày khởi hành</p>
                            <input className="form-select"
                                onChange={(e) => {
                                    setStart(e.target.value);
                                    var a = new Date(e.target.value);
                                    console.log(a);
                                }}
                                type='date'
                                placeholder="dd-mm-yyyy" />

                        </div>
                        <div className='form'>
                            <p className='option-tt'>Giá tiền</p>
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
                        <button type="button" className="btn-search" onClick={() => handleSearch()}>Tìm kiếm</button>


                    </div>

                    <div className='output-search'>
                        <div>

                            {
                                userSearchData && userSearchData.length > 0 ?
                                    userSearchData.map(item =>
                                        <div className='result-main'>
                                            <img className='img-search' src={"http://localhost:8080/uploads/" + item.imgURL} />
                                            <div className='info-search' >

                                                <NavLink to={`/DetailProduct/${item.id}`}>
                                                    <div className='name-search' >{item.nametour}</div>
                                                </NavLink>

                                                <div className='time-search' >
                                                    <div className='tt-time'>Thời gian:</div>
                                                    <div className='time-search-m'>{item.time}</div>
                                                </div>
                                                <div className='price-search' >Giá từ: {(item.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VNĐ</div>


                                            </div>


                                        </div>


                                    ) :
                                    // <div className='no-result'>Không có kết quả</div>
                                    <div>  {ResultSearch(state.result.result)}</div>
                            }</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
export default SearchMain