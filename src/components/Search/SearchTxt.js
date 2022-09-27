import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import { NavLink } from 'react-router-dom';
import './Search.css'
import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from '@bit/zenhomes.react-components.close-icon';

const SearchTxt = () => {
  const [allData, setAllData] = useState([]);
  const [filterData, setFilterData] = useState(allData);
  const [wordEntered, setWordEntered] = useState("");
  useEffect(() => {
    axios('http://localhost:8080/review/listtour')
      .then(response => {
        setAllData(response.data);
        // setFilterData(response.data);
      })
      .catch(error => {
        console.log('Error getting fake data: ' + error);
      })
  }, []);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = allData.filter((value) => {
      return value.nametour.toLowerCase().includes(searchWord.toLowerCase());
    });



    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };


  return (
    <>

      <div className='search-txt'>

        <div className=''>
          <p> Tìm kiếm</p>
          <div className="form">
            <div className="searchInputs">
              <input
                type="text"
                className="form-select" id="ipt-search" aria-label="Default select example"
                placeholder='Tìm điểm du lịch'
                value={wordEntered}
                onChange={handleFilter}
              />
              <div  className="searchIcon">

                {filterData.length === 0 ? (
            <SearchIcon />
          )
           : (
            <button id="clearBtn" onClick={clearInput}>Xóa</button> 
          )
          }
              
              </div>
            </div>

            {filterData.length != 0 && (
              <div className="dataResult">
                {filterData.slice(0, 15).map((value, key) => {
                  return (
                    <a className="dataItem" target="_blank">
                      <img className='imgtour-search' src={"http://localhost:8080/uploads/" + value.imgURL} />
                      <NavLink to={`/DetailProduct/${value.id}`}> <div className='SearchName'>{value.nametour} </div></NavLink>
                    </a>
                  );
                })}
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  )
}

export default SearchTxt;