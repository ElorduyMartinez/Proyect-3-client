import React from "react";
import Popup from "reactjs-popup";
import "./Module.css"
import { useState } from "react";

function Modulem  () {
    const [MovieName, setMovieName] = useState("");
    const [MovieGender, setMovieGender] = useState("");
    const [MovieDescription, setMovieDescription] = useState("");
    const [MovieCreator, setMovieCreator] = useState("");
    const [MovieImage, setMovieImage] = useState(undefined);
    const handleMovieName = (e) => setMovieName(e.target.value);
    const handleMovieGender = (e) => setMovieGender(e.target.value);
    const handleMovieDescription = (e) => setMovieDescription(e.target.value);
    const handleMovieCreator = (e) => setMovieCreator(e.target.value);
    const handleMovieImage = (e) => setMovieImage(e.target.value);
    const handleMoviesSubmit = (e) => {
    
      
    }
    return(
    <Popup
    trigger={<button className="button"> Add Movie </button>}
    modal
    nested
    >

    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>

        <div className="header"> Add Movie</div>
        <form onSubmit={handleMoviesSubmit}></form>
        <div className="content">
          {' '}
        <label>Movie Name:</label>
        <input
          className="inputName"
          placeholder="Movie Name"
          type="MovieName" name="MovieName" value={MovieName} onChange={handleMovieName}
          />
        <label>Gender: </label>
        <select name="category">
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Science fiction">Science fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Drama">drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Musical">Musical</option>
            <option value="Suspense">Suspense</option>
            <option value="Horror">Horror</option>

        </select>
        <label>Description:</label>
        <input
          className="input-peli"
          placeholder="Description"
           type="MovieDescription" name="MovieDescription" value={MovieDescription} onChange={handleMovieDescription}  />
        <label>Movie Creator:</label>
        <input
          className="input-peli"
          placeholder="Movie Creator"
          type="MovieCreator" name="MovieCreator" value={MovieCreator} onChange={handleMovieCreator}  />


        <label>Image:</label>
        <input type="file" name="Recipe-image" className="recipeimage" accept=".jpg , .png"/>
        </div>
        
        <div className="actions">
          <button
            className="button"
            type='submit'
          >
            Add 
          </button>
        </div>
      </div>
    )}
  </Popup>
    )
};

export default Modulem;