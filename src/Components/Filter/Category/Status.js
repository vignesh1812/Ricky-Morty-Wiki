import React from 'react'
import FilterBTN from '../FilterBTN'

const Status = ({setstatus,setpagenumber}) => {
    let status=['Alive',"Dead","Unknown"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex gap-2 flex-wrap">
        {status.map((items,index)=>(<FilterBTN task={setstatus} setpagenumber={setpagenumber} key={index} items={items} name='status' index={index} />)
        )}
        </div>
    </div>
  </div>
  )
}

export default Status