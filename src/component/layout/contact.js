import React from 'react';
import 'react-toastify/dist/ReactToastify.css'


const Contact = () => {

    return (
    <div className="contact" style={{marginTop: 80 + 'px'}}>
  
      <div className="form-contact">
        <form>
          <h1>Besoin de nous contacter ?</h1>
        <span>N'hésitez pas ici !</span>
        <div className="group">      
          <input type="text" name="firstname" placeholder="Prénom" required/>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div className="group">      
          <input type="text" name="lastname" placeholder="Nom" required/>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div className="group">      
          <input type="email" name="email" placeholder="Email" required/>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div className="group">      
          <input type="text" name="subjet" placeholder="Sujet" required/>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div className="group">      
          <textarea type="textarea" name="freefield" placeholder="Commentaires" required/>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div className="group"> 
          <button>Envoyer ma demande</button>
        </div>
        </form>
      </div>
      
    </div>
    );

}


export default Contact