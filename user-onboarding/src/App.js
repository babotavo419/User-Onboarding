import React, { useState } from 'react';
import './App.css';
import schema from './validation/formSchema';
import * as yup from 'yup';
import Form from './components/Form';
import axios from 'axios';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [FormErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post('http://reqres.in/api/users', formValues)
      .then(res => {
        setUsers([res.data, ...users])
      
      })
      .catch(err => console.log(err))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors ({...FormErrors, [name]: ''}))
      .catch(err => setFormErrors ({...FormErrors, [name]: err.errors[0]}))
  

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  
  }

  return (
    <div className="App">
      <Form 
      values={formValues} 
      change={handleChange} 
      errors={FormErrors} 
      submit={handleSubmit} 
      />
      {users.map(user => (
        <div key={user.id} >
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
}
export default App;

