import React, {useState} from 'react';

const useLoginForm = (callback) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    checkInputs();
    console.log(inputs.email);
    console.log(inputs.password);
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const checkInputs = (event) => {
    if (!inputs.email)
      alert('Email field missing')
    else if (!inputs.password)
      alert('Password field missing')
    else
      return false

    return true
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useLoginForm;
