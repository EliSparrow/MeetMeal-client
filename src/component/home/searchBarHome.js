import React, { Component } from 'react'

import '../../stylesheets/searchBarHome.css';

class SearchBarHome extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){

    return (
      <div class="s002">
        <form class="form-inline">
          <div class="inner-form">

              // SECTION 1: LIEU

              <div class="input-field first-wrap">
                <div class="icon-wrap">
                    <svg class="icon icon-location" width="24" height="24" viewBox="0 0 24 24"><use href="icon-location"></use>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                    </svg>
                </div>
                <input id="position" type="text" placeholder="Adresse, code postal, ville" />
              </div>


               // SECTION 2: DATE

          <div class="input-field second-wrap">
            <div class="icon-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
              </svg>
            </div>
            <input class="datepicker" id="date" type="text" placeholder="Date" />
          </div>


           // SECTION 3: REPAS

                <div class="input-field third-wrap">
                  <div class="icon-wrap">
                      <svg class="icon icon-spoon-knife" width="24" height="24" viewBox="0 0 24 24"><use href="#icon-spoon-knife"></use>
                      <path d="M4.368 0c-2.068 0-3.744 1.955-3.744 4.368 0 2.065 1.229 3.795 2.88 4.25l-.62 10.102c-.042.685 .485 1.245 1.172 1.245h.624c.686 0 1.214-.56 1.172-1.245l-.62-10.102c1.651-.455 2.88-2.185 2.88-4.25 0-2.412-1.676-4.368-3.744-4.368zM16.951 0l-1.04 6.239h-.78l-.52-6.239h-.52l-.52 6.239h-.78l-1.04-6.239h-.52v8.111c0 .344.28 .624.624 .624h1.625l-.613 9.986c-.042.685 .485 1.245 1.172 1.245h.624c.686 0 1.214-.56 1.172-1.245l-.613-9.986h1.625c.344 0 .624-.28.624-.624v-8.111h-.52z"></path>
                    </svg>
                  </div>
                  <select id="meal" data-trigger="" name="choices-single-defaul">
                      <option value="">Tous les repas</option>
                      <option value="1">Petit-déjeuner</option>
                      <option value="2">Déjeuner</option>
                      <option value="3">Apéro</option>
                      <option value="4">Dîner</option>
                      <option value="4">Pique-nique</option>
                  </select>
                </div>


            // SECTION 4 : CUISINE

       <div class="input-field fouth-wrap">
         <div class="icon-wrap">
           <svg class="icon icon-spoon-knife" width="24" height="24" viewBox="0 0 24 24"><use href="#icon-spoon-knife"></use>
             <path d="M4.368 0c-2.068 0-3.744 1.955-3.744 4.368 0 2.065 1.229 3.795 2.88 4.25l-.62 10.102c-.042.685 .485 1.245 1.172 1.245h.624c.686 0 1.214-.56 1.172-1.245l-.62-10.102c1.651-.455 2.88-2.185 2.88-4.25 0-2.412-1.676-4.368-3.744-4.368zM16.951 0l-1.04 6.239h-.78l-.52-6.239h-.52l-.52 6.239h-.78l-1.04-6.239h-.52v8.111c0 .344.28 .624.624 .624h1.625l-.613 9.986c-.042.685 .485 1.245 1.172 1.245h.624c.686 0 1.214-.56 1.172-1.245l-.613-9.986h1.625c.344 0 .624-.28.624-.624v-8.111h-.52z"></path>
           </svg>
         </div>
         <select id="meal" data-trigger="" name="choices-single-defaul">
             <option value="">Toutes les cuisines</option>
             <option value="1">Française</option>
             <option value="2">Américaine</option>
             <option value="3">Anglaise</option>
             <option value="4">Espagnole</option>
             <option value="4">Thailandaise</option>
             <option value="5">Vietnamienne</option>
             <option value="6">Japonaise</option>
             <option value="7">Chinoise</option>
             <option value="8">Russe</option>
             <option value="9">Autre</option>
         </select>
       </div>


       // SECTION 5: BOUTTON RECHERCHER

       <div class="input-field fifth-wrap">
         <button class="btn-search" type="button">RECHERCHER</button>
       </div>


          </div>
        </form>
</div>


    )
  }

}

export default SearchBarHome;
