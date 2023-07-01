import Nava from './Nava';


import { useState, useEffect } from "react";
function Data() {
    const [Table, SetTable] = useState(null);
    const [Null, SetNull] = useState(false);
    useEffect(() => {
        fetch('https://ccareserver.onrender.com/api/data',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
            .then((data) => {
                    if (data.array == null) SetNull(true);
                    else {
                        SetTable(data.array);
                        if(data.array.length>0) SetNull(true);
                    
                }
            })
            })
    

    return (<>
        <div id="nav1"><Nava/></div>
        <br></br>
        <div className="container-fluid log-welcome"><br></br></div>
        <table className="table">
            <thead>
            <tr>
                    <th scope="col">S. No</th>
                    <th scope="col">Image</th>
                    <th scope="col">Prediction Value</th>
                </tr>
            </thead>
            <tbody id="table-body" style={{"color":"black"}}>
                {Null ? Table.map((item, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td><img alt='preview' src={URL.createObjectURL(new Blob([new Uint8Array(item.image.data)], { type: item.type }))} width="100" /></td>
                        <td>{item.result}</td>
                    </tr>
                )) : <tr><td colSpan="3">{Table==null? "Loading":"No Data"}</td></tr>}
            </tbody>
        </table></>);

};
export default Data;
