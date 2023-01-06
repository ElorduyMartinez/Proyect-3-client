import React from "react";
import Popup from "reactjs-popup";
import "./modules.css"

const Modules = () => (
    <Popup
    trigger={<button className="button"> Add Serie </button>}
    modal
    nested
  >
    {close => (
      <div className="modals">
        <button className="close" onClick={close}>
          &times;
        </button>

        <div className="header"> Add Serie</div>
        <div className="content">
          {' '}
        <label>Series Name:</label>
        <input
          className="input-peli"
          placeholder="Series Name"/>
        <label>Number of chapters: </label>
        <input
          className="input-peli"
          type = "Number"
          placeholder="Number of chapters"/>
        <label>Number of Seasons: </label>
        <input
          className="input-peli"
          type = "Number"
          placeholder="Number of Seasons"/>
        <label>Description:</label>
        <input
          className="input-peli"
          placeholder="Description"/>  
        <label>Series Creator:</label>
        <input
          className="input-peli"
          placeholder="Series Creator"/> 
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

export default Modules