import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSubmit = () => {

  }

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  
  }

  return (
    <div className="App">
      <Form values={formValues} />
    </div>
  );
}

export default App;

