import React from 'react'

const FilterBTN = ({index,name,items,task,setpagenumber}) => {
  return (
    <div>
     <style jsx>
          {`
            input[type=radio]{
                display:none
            }
    .form-check-input:checked + label{
        background-color:#0b5ed7;
        color:white;
    }

          `}
     </style>

        <div className="form-check">
  <input onClick={()=>{
    setpagenumber(1);
    task(items);
  }}  className="form-check-input" type="radio" name={name} id={`${name}-${index}`}/>
  <label className="btn btn-outline-primary" for={`${name}-${index}`}>
    {items}
  </label>
</div>
    </div>
  )
}

export default FilterBTN