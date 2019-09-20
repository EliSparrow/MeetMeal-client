import {useState} from 'react';

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
    if (!inputs.email && !inputs.password)
      alert('Les champs "email" et "mot de passe" sont manquants')
    else if (!inputs.email)
      alert('Le champ "email" est manquant')
    else if (!inputs.password)
      alert('La champ "mot de passe" est manquant')
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
