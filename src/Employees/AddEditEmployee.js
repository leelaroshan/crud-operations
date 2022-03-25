import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import Swal from 'sweetalert2';
import './AddEditEmployee.css'

export default function AddEditEmployee() {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    age: 1,
    email: '',
  });



  
  // const handleChange = (e) => {
  //     let firstname = e.target.value;
  //     let lastname = e.target.value;
  //     let age = e.target.value;
  //     let email = e.target.value;
  //     setData({
  //         ...data,
  //         firstname : firstname, lastname:lastname,age:age,email:email
  //     })

  // }

  const { _id } = useParams();
  const id = _id;
  console.log(id);

  const postdata = {
    // ...data
    first_name: data.firstname,
    last_name: data.lastname,
    age: data.age,
    email: data.email,
  };





  
  const addData = async () => {
    await axios
      .post('http://localhost:8000/employees', postdata)
      .then((res) => {
        Swal.fire({
          title: 'New Employee added sucessfully!',
          icon: 'success',
          text: '',
          type: 'success',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok',
        });
        window.location.href = '/';
      })
      .catch((err) => {
        Swal.fire({
          title:
            err?.response?.data?.data?.details?.[0]?.message ||
            err?.response?.data?.message,
          icon: 'error',
          text: '',
          type: 'error',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok',
        });
      });
  };


  const updatedData = {
    _id: id,
    first_name: data.firstname,
    last_name: data.lastname,
    age: data.age,
    email: data.email,
  };

    const updateData = async () => {
      await
        axios.put(`http://localhost:8000/employees/${id}`, updatedData)
          .then((res) => {
         Swal.fire({
          title: 'New Employee added sucessfully!',
          icon: 'success',
          text: '',
          type: 'success',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok',
        });
        window.location.href = '/';
      })
      .catch((err) => {
        Swal.fire({
          title:
            err?.response?.data?.data?.details?.[0]?.message ||
            err?.response?.data?.message,
          icon: 'error',
          text: '',
          type: 'error',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok',
        });
      
      })
  }

  const getDataById = async () => {
    await axios.get('http://localhost:8000/employees/' + id).then((res) => {
      console.log(res?.data?.data);
      setData(res?.data?.data);

      // *****new code here **********
      setData({ firstname: res?.data?.data?.first_name, lastname: res.data.data.last_name, age: res.data.data.age, email: res.data.data.email })
    });
  };






  useEffect(() => {
    getDataById();
  }, []);



  const onSubmitData = () => {
    {
      id ? updateData() : addData()
      console.log(postdata)
    }
  };

  return (
    <div className="big-div">
      <h4>{_id ? 'Edit' : 'Add'} new Employee here</h4>
      <p>
        <Link to="/">home</Link>
      </p>
      <div className="form-div">
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter First Name.."
          value={data.firstname}
          onChange={(e) => setData({ ...data, firstname: e.target.value })}
        />
        {data.firstname}
        <br />
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter Last Name.."
          value={data.lastname}
          onChange={(e) => setData({ ...data, lastname: e.target.value })}
        />
        {data.lastname}
        <br />
        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="Enter age.."
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
        {data.age}
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email here.."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {data.email}
        <br />
        <button onClick={onSubmitData}>submit</button>
      </div>

      <h2>{JSON.stringify(data)}</h2>
    </div>
  );
}
