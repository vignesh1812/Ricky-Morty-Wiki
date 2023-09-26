import React from 'react'
import ReactPaginate from 'react-paginate';
import './pagination.css';
const Pagination = ({info,pagenumber,setpagenumber}) => {    
  return (<ReactPaginate 
         pageCount={info?.pages}
         nextLabel='Next'         
         previousLabel='Prev'
         nextClassName='btn btn-primary'
         previousClassName='btn btn-primary'
         forcePage={pagenumber === 1 ? 0 : pagenumber - 1}
         pageClassName='page-item'
         activeClassName='active'
         pageLinkClassName='page-link'
         nextLinkClassName='text-decoration-none text-white'
         previousLinkClassName='text-decoration-none text-white'
         className='pagination justify-content-center my-4 gap-3'
         onPageChange={(data)=>{setpagenumber(data.selected + 1)}}
         /> );
}

export default Pagination