import React, { useState,useEffect } from "react";
import medical_records from "../medicalRecords";

function Records({id,setId}) {

  const [isRecordSeted, setIsRecordSeted] = useState(false);
  const [patientRecords,setpatientRecords]=useState([{},]);

  useEffect(()=>{
    setId(id*1);
  },[])
  useEffect(()=>{

  if(id==null)
    return;
  
    try{
      setIsRecordSeted(false)
      setpatientRecords([]);
      const veri =medical_records[id-1].data;
    setpatientRecords([...veri]);
    setIsRecordSeted(true);
    }
    catch(Exception ){
    }
  },[id])

const selectNextPatient=()=>{
  const patientCount= medical_records.length;
  const nextId= id+1<=patientCount?id+1:1;
  setId(nextId);
}
if(!isRecordSeted)
  return;
  return (
    <div className="patient-profile-container" id="profile-view">
      <div className="layout-row justify-content-center">
        <div id="patient-profile" data-testid="patient-profile" className="mx-auto">
          <h4 id="patient-name">{patientRecords[0].userName}</h4>
          <h5 id="patient-dob">DOB: {patientRecords[0].userDob}</h5>
          <h5 id="patient-height">Height: {patientRecords[0].meta.height} cm</h5>
        </div>
        <button className="mt-10 mr-10" data-testid="next-btn" onClick={selectNextPatient}>
          Next
        </button>
      </div>

      <table id="patient-records-table">
        <thead id="table-header">
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody id="table-body" data-testid="patient-table">
         
         {patientRecords.map((item,id)=>
  
          <tr>
            <td>{id+1}</td>
            <td>{new Date(item.timestamp).toLocaleDateString('en-GB')}</td>
            <td>{item.diagnosis.name}</td>
            <td>{item.meta.weight}</td>
            <td>{item.doctor.name}</td>
          </tr>
      )}
        </tbody>
      </table>
    </div>
  );
}

export default Records;
