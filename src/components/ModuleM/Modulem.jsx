import React from "react";
import Popup from "reactjs-popup";
import "./Module.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005"
function Modulem  (props) {
    const navigate = useNavigate
    const [MovieName, setMovieName] = useState("");
    const [MovieGender, setMovieGender] = useState('Action');
    const [MovieDescription, setMovieDescription] = useState("");
    const [MovieCreator, setMovieCreator] = useState("");
    const [MovieImage, setMovieImage] = useState("");
    const handleMovieName = (e) => setMovieName(e.target.value);
    const handleMovieGender = (e) => setMovieGender(e.target.value);
    const handleMovieDescription = (e) => setMovieDescription(e.target.value);
    const handleMovieCreator = (e) => setMovieCreator(e.target.value);
    const handleMovieImage = (e) => setMovieImage(e.target.value);
    const handleMoviesSubmit = async (e) => {
      try{
      e.preventDefault();
      console.log({MovieCreator})
      const newMovie = await axios.post(`${API_URL}/api/movie`, {MovieName ,MovieGender , MovieDescription, MovieCreator, MovieImage});
        navigate (`/movie/${newMovie.data._id}`)
      } catch (err) {
        console.log(err)
      }
      }

    return(
    <Popup
    trigger={<button className="button"> Add Movie </button>}
    modal
    nested
    >
    
    {close => (
      
      <div className="modal">
      <form onSubmit={handleMoviesSubmit}>
        <button className="close" onClick={close}>
          &times;
        </button>

        <div className="header"> Add Movie</div>
        
        <div className="content">
          {' '}
        <label>Movie Name:</label>
        <input
          className="inputName"
          placeholder="Movie Name"
          type="text" name="MovieName" value={MovieName} onChange={handleMovieName}
          />
        <label>Gender: </label>
        <select name="MovieGender" type="select" value={MovieGender} onChange={handleMovieGender}>
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
           type="text" name="MovieDescription" value={MovieDescription} onChange={handleMovieDescription}  />
        <label>Movie Creator:</label>
        <input
          className="input-peli"
          placeholder="Movie Creator"
          type="text" name="MovieCreator" value={MovieCreator} onChange={handleMovieCreator}  />


        <label>Image:</label>
        <input type="file" name="Recipe-image" className="recipeimage" accept=".jpg , .png" value={MovieImage} onChange={handleMovieImage}/>
        </div>
        
        <div className="actions">
          <button
            className="button"
            type='submit'
          
          >
            Add 
          </button>
        </div>
        </form>
      </div>
        
    )}
  </Popup>
    )
};

export default Modulem;