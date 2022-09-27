import React, { useState } from 'react'
import { Route, Router } from 'react-router'
import { Link } from 'react-router-dom';
import Search from './Search'
import SearchTxt from './SearchTxt'

export default function SearchRoute() {

    const [activeTab, setActiveTab] = useState("tab1");

    const handleTab1 = () => {
        setActiveTab("tab1");
    }
    const handletab2 = () => {
        setActiveTab("tab2")
    }

    return (
        <div className='SRoute'>


            <div className='tab'>
                <li id='tab1' onClick={handleTab1} className={activeTab === "tab1" ? "lively" : ""}>Bộ lọc tìm kiếm</li>
                <li id='tab2' onClick={handletab2} className={activeTab === "tab2" ? "lively" : ""}>Tìm kiếm</li>

            </div>
            <div className='outlet'>
                {activeTab === "tab1" ? <Search /> : <SearchTxt/>
                    // <div className='search-form'>
                    //     <p>Tìm kiếm</p>
                    //     <Link to='/SearchTxt'>
                    //     <div>
                    //         <input type='text'
                    //             className="form-select" aria-label="Default select example"
                    //             placeholder='Tìm điểm du lịch' />
                    //     </div>
                    //     </Link>
                    // </div>

                }
            </div>

        </div>
    )
}
