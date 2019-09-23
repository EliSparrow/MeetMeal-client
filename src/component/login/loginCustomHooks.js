import {useState} from 'react';
import axios from 'axios';

const useLoginForm = (callback) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    if (event)
      event.preventDefault();

    checkInputs();
    axios.post('http://localhost:1509/users/login', {
      email: inputs.email,
      password: inputs.password
      },
    ).then(res => {
      sessionStorage.setItem('token', res.data.token);
      this.props.history.push('/');
    }).catch(err => {
      if (err.response.data.msg) {
        if (err.response.data.msg === 'Mot de passe invalide')
          return alert('Mot de passe invalide')
        else
          return alert('Utilisateur inconnu')
      }
      return alert('Nous sommes désolés, nous faisons face à un problème de serveur')
    });
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const checkInputs = (event) => {
    if (!inputs.email && !inputs.password)
      return alert('Les champs "email" et "mot de passe" sont manquants');
    else if (!inputs.email)
      return alert('Le champ "email" est manquant');
    else if (!inputs.password)
      return alert('La champ "mot de passe" est manquant');
    else
      return true
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useLoginForm;
