import React from 'react'
import './Search.css';

const Search = ({setsearch}) => {

  return (
    <form onSubmit={e=>e.preventDefault()} className=' d-flex justify-content-center gap-3 mb-4'>
        <input  onChange={(e)=>{setsearch(e.target.value)}}  style={{padding:"5px",outline:"none"}} type="text" className='shadow-sm border border-primary border-2 rounded-2' placeholder='Search for characters' name="search" id="" />
        <button  className='btn btn-primary shadow-sm'>Search</button>
    </form>
  )
}

export default Search