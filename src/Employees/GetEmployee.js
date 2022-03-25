import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DataTable from 'react-data-table-component';



export default function GetEmployee() {

    const [data, setData] = useState([]);

const columns = [
  {
    name: 'First Name',
    selector: (row) => row.first_name,
  },
  {
    name: 'Last Name',
    selector: (row) => row.last_name,
  },
  {
    name: 'Age',
    selector: (row) => row.age,
  },
  {
    name: 'Email',
    selector: (row) => row.email,
  },
  {
    name: 'Actions',
    cell: (row) => (
      <div>
        <Link to={"/add-new/"+ row._id}>
          <button>Edit</button>
        </Link>
        <span>
          <button>Delete</button>
        </span>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

       
 const fetchData=  async () => {
                
     await axios.get("http://localhost:8000/employees",
     ).then(res => {
         setData(res?.data?.data);
          console.log(res.data.data)
     })
         .catch((err) => console.log(err));

     }

    
    useEffect(() => {
        fetchData();
        
    }, [])


    return (
      <div>
        <h4>GET EMPLOYEE</h4>

        <Link to={`/add-new/:_id?`}>
          <button> + Add new One</button>
        </Link>

        <DataTable columns={columns} data={data} />
      </div>
    );
}
