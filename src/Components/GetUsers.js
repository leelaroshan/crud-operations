import React,{useState,useEffect} from 'react'
// import MUIDataTable from "mui-datatables";
import Constant from "../Constant";
import axios from "axios";
// import { ThemeProvider } from "@mui/styles";





export default function GetUsers() {

    const [usersList, setUsersList] = useState([]);

    const fetchUser = ()=>{
        axios
        .get( "'https://fakestoreapi.com/products'")
        .then(res => {
                setUsersList(res?.data?.data);
                 console.log(res.data.data)
               })
             .catch((err) => {
                console.log(err)
                  });
              
    
    }

useEffect(()=>{
    fetchUser();
},[])






    const columns = [  

          {
              name: "title",
              label: " Name",
              options: {
                  filter: true,
                  sort: true,
              },
          },
           {
               name: "price",
               label: "Price",
               options: {
                   filter: true,
                   sort: true,
               },
           },
           {
            name: "category",
            label: "Category",
            options: {
                filter: true,
                sort: true,
            },
        },

          
    ]

    const options = {
        
        viewColumns: false,
        print: false,
        download: false,
        selectableRows: "none",

      };


 


    return (
       
<div className="page-body">
  
              {usersList}
      
      </div>
    )
}





// <div className="row">
//      <div className="col-sm-12">
//        <div className="card">
//            <div className="card-block">
//                <div className="dt-responsive table-responsive">
//                         <MUIDataTable 
//               title={"Products List"} 
//               data={usersList} 
//               columns={columns} 
//               options={options} 
//                />
         
//                  </div>
//             </div>
//       </div>      
//        </div>
      
//       </div>