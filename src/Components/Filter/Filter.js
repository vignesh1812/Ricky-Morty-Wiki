import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'
const Filter = ({setstatus,setpagenumber,setgender,setspecies}) => {
  return (
    <div className="col-lg-3 col-sm-12 mb-3">
      <div className='text-center fs-4 fw-bold mb-2'>Filter</div>
      <div
      onClick={()=>{
        setstatus("");
        setpagenumber("");
        setgender("");
        setspecies("");
        window.location.reload(false);
      }} 
      style={{ cursor: "pointer" }} className="text-center mb-3 text-primary text-decoration-underline">clear Filter</div>
      <div className="accordion" id="accordionExample">
        <Status setpagenumber={setpagenumber} setstatus={setstatus}/> 
        <Species setspecies={setspecies} setpagenumber={setpagenumber}/>
        <Gender setgender={setgender} setpagenumber={setpagenumber}/>
      </div>

    </div>

  )
}

export default Filter