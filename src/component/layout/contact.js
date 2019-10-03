import React from 'react';
import 'react-toastify/dist/ReactToastify.css'


const Contact = () => {

    return (
    <div className="contact" style={{marginTop: 80 + 'px'}}>
  
      <div className="form-contact">
        <form>
          <h1>Besoin de nous contacter ?</h1>
        <h4>N'hésitez pas ici !</h4>
        <hr className="col-12" style={{width: 30 +'px', color: 'black'}}></hr>
        <div className="row">
          <div className="col-6">  
          <label>Prénom</label><br></br> 
          <input type="text" name="firstname" placeholder="Prénom" required/>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div className="col-6">  
        <label>Nom</label><br></br>    
          <input type="text" name="lastname" placeholder="Nom" required/>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div className="col-12">  
        <label>Email</label><br></br>    
          <input type="email" name="email" placeholder="bonjour@cava.fr" required/>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        </div>
        <div className="row" style={{marginTop: 10 + 'px'}}>
        <div className="col-12">
          <label>Sujet de votre demande</label>  <br></br> 
          <input type="text" name="subjet" placeholder="Sujet" required/>
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        </div>
        <div className="col-12">   
        <label>Votre demande</label><br></br>   
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