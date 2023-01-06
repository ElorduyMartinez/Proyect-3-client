import React from "react";
import Popup from "reactjs-popup";
import "./Modulep.css"

const Modulep = () => (
    <Popup
    trigger={<button className="button"> Add Podcast </button>}
    modal
    nested
  >
    {close => (
      <div className="modals">
        <button className="close" onClick={close}>
          &times;
        </button>

        <div className="header"> Add Podcast</div>
        <div className="content">
          {' '}
        <label>Podcast Name:</label>
        <input
          className="input-peli"
          placeholder="Podcast Name"/>
        <label>Number of chapters: </label>
        <input
          className="input-peli"
          type = "Number"
          placeholder="Number of chapters"/>
        <label>Avarage Duration: </label>
        <input
          className="input-peli"
          type = "Number"
          placeholder="Minutes"/>
        <label>Description:</label>
        <input
          className="input-peli"
          placeholder="Description"/>  
        <label>Podcast Creator:</label>
        <input
          className="input-peli"
          placeholder="Podcast Creator"/> 
        <label>Image:</label>
        <input type="file" name="Recipe-image" class="recipeimage" accept=".jpg , .png"/>
        </div>
        
        <div className="actions">
          <button
            className="button"
            onClick={() => {
              console.log('Aqui para mandar los datos a la base ');
            }}
          >
            Add 
          </button>
        </div>
      </div>
    )}
  </Popup>
  );

export default Modulep