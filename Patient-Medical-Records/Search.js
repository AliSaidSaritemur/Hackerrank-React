import React, { useState } from "react";
import medical_records from "../medicalRecords";


function Search({  setId }) {
  const [selectedOption , setSelectedOption] = useState(); 

  const handleChange=()=>{
    
    setSelectedOption(event.target.value);
  }

  const showREcords=()=>{
    if(selectedOption==null)
      {   alert("Please select a patient name")
        return;
      }

    setId(selectedOption);
  }
  return (
   
    <div className="layout-row align-items-baseline select-form-container">

      <div className="select">
        <select value={selectedOption} data-testid="patient-name" defaultValue="0" onChange={handleChange} >
          <option value="0" disabled>
            Select Patient
          </option>
          {medical_records.map((item,id)=>
          <option value={id+1}>{item.data[0].userName}</option>
        )}
        </select>
      </div>

      <button type="submit" data-testid="show" onClick={showREcords}>
        Show
      </button>
    </div>
   
  );
}

export default Search;
