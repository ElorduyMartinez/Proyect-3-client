import React from "react";
import Popup from "reactjs-popup";
import "./modules.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:5005"
function Modules (props) {
  const navigate = useNavigate
  const [SerieName, setSerieName] = useState("");
  const [SerienumberOfChapters, setSerienumberOfChapters] = useState("");
  const [SerieDescription, setSerieDescription] = useState("");
  const [SerieCreator, setSerieCreator] = useState("");
  const [SerieImage, setSerieImage] = useState("");
  const [SerienumberOfSeason, setSerienumberOfSeason] = useState("");
  const handleSerieName = (e) => setSerieName(e.target.value);
  const handleSerienumberOfChapters = (e) => setSerienumberOfChapters(e.target.value);
  const handleSerieDescription = (e) => setSerieDescription(e.target.value);
  const handleSerieCreator = (e) => setSerieCreator(e.target.value);
  const handleSerieImage = (e) => setSerieImage(e.target.value);
  const handleSerienumberOfSeason = (e) => setSerienumberOfSeason(e.target.value);
  const handleSerieSubmit = async (e) => {
    try{
    e.preventDefault();
    console.log({SerieCreator})
    const newSerie = await axios.post(`${API_URL}/api/series`, {SerieName ,SerienumberOfChapters , SerieDescription, SerieCreator, SerieImage, SerienumberOfSeason});
      navigate (`/series/${newSerie.data._id}`)
    } catch (err) {
      console.log(err)
    }
    }
    return(
    <Popup
    trigger={<button className="button"> Add Serie </button>}
    modal
    nested
  >
    {close => (
      <div className="modals">
      <form onSubmit={handleSerieSubmit}>
        <button className="close" onClick={close}>
          &times;
        </button>

        <div className="header"> Add Serie</div>
        <div className="content">
          {' '}
        <label>Series Name:</label>
        <input
          className="input-peli"
          placeholder="Series Name"
          type="text"  value={SerieName} onChange={handleSerieName}
          />
        <label>Number of chapters: </label>
        <input
          className="input-peli"
          type = "Number"
          placeholder="Number of chapters"
          value={SerienumberOfChapters} onChange={handleSerienumberOfChapters}
          />
        <label>Number of Seasons: </label>
        <input
          className="input-peli"
          type = "Number"
          placeholder="Number of Seasons"
          value={SerienumberOfSeason} onChange={handleSerienumberOfSeason}
          />
        <label>Description:</label>
        <input
          className="input-peli"
          placeholder="Description"
          type="text"  value={SerieDescription} onChange={handleSerieDescription}
          />  
        <label>Series Creator:</label>
        <input
          className="input-peli"
          placeholder="Series Creator"
          type="text"  value={SerieCreator} onChange={handleSerieCreator}
          /> 
        <label>Image:</label>
        <input type="file" name="Recipe-image" class="recipeimage" accept=".jpg , .png" value={SerieImage} onChange={handleSerieImage}/>
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
)};

export default Modules