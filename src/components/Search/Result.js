import React from 'react'
import { useSelector } from 'react-redux';
const Result = () => {

  const state = useSelector((state) => state.searchResult)

  console.log('state', state)

  const ResultSearch = (result) => {
    console.log('result', result)
    return (
      result.map(va => (
        <div>
          <div className='name-tour-check'>{va.nametour}  </div>
        </div>
      ))

    )
  }

  return (
    <>
      {ResultSearch(state.result.result)}
    </>
  )

}

export default Result