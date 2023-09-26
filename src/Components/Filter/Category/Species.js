import React from 'react'
import FilterBTN from '../FilterBTN';

const Species = ({setspecies,setpagenumber}) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Species
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex gap-2 flex-wrap">
      {species.map((items,index)=>(<FilterBTN task={setspecies} setpagenumber={setpagenumber} name="species" index={index} key={index} items={items}/>)
        )}
      </div>
    </div>
  </div>  )
}

export default Species