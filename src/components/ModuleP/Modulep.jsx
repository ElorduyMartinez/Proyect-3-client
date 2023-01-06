import React from "react";
import Popup from "reactjs-popup";
import "./Modulep.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005"
function Modulep  (props) {
  const navigate = useNavigate
  const [PodcastName, setPodcastName] = useState("");
  const [PodcastnumberOfChapters, setPodcastnumberOfChapters] = useState("");
  const [PodcastDescription, setPodcastDescription] = useState("");
  const [Podcastauthors, setPodcastauthors] = useState("");
  const [PodcastImage, setPodcastImage] = useState("");
  const [PodcastaverageDuration, setPodcastaverageDuration] = useState("");
  const handlePodcastName = (e) => setPodcastName(e.target.value);
  const handlePodcastnumberOfChapters = (e) => setPodcastnumberOfChapters(e.target.value);
  const handlePodcastDescription = (e) => setPodcastDescription(e.target.value);
  const handlePodcastauthors = (e) => setPodcastauthors(e.target.value);
  const handlePodcastImage = (e) => setPodcastImage(e.target.value);
  const handlePodcastaverageDuration = (e) => setPodcastaverageDuration(e.target.value);
  const handlePodcastSubmit = async (e) => {
    try{
    e.preventDefault();
    console.log({Podcastauthors})
    const newPodcast = await axios.post(`${API_URL}/api/podcast`, {PodcastName ,PodcastnumberOfChapters , PodcastDescription, Podcastauthors, PodcastImage, PodcastaverageDuration});
      navigate (`/podcast/${newPodcast.data._id}`)
    } catch (err) {
      console.log(err)
    }
    }
  return (
    <Popup
    trigger={<button className="button"> Add Podcast </button>}
    modal
    nested
  >
    {close => (
      <div className="modals">
      <form onSubmit={handlePodcastSubmit}>
        <button className="close" onClick={close}>
          &times;
        </button>

        <div className="header"> Add Podcast</div>
        <div className="content">
          {' '}
        <label>Podcast Name:</label>
        <input
          className="input-peli"
          placeholder="Podcast Name"
          type = "text"
          value={PodcastName} onChange={handlePodcastName}
          />
        <label>Number of chapters: </label>
        <input
          className="input-peli"
          type = "Number"
          placeholder="Number of chapters"
          value={PodcastnumberOfChapters} onChange={handlePodcastnumberOfChapters}
          />
        <label>Avarage Duration: </label>
        <input
          className="input-peli"
          type = "Number"
          placeholder="Minutes"
          value={PodcastaverageDuration} onChange={handlePodcastaverageDuration}
          />
          
        <label>Description:</label>
        <input
          className="input-peli"
          placeholder="Description"
          type="text"
          value={PodcastDescription} onChange={handlePodcastDescription}
          />  
        <label>Podcast Creator:</label>
        <input
          className="input-peli"
          placeholder="Podcast Creator"
          type="text"
          value={Podcastauthors} onChange={handlePodcastauthors}
          /> 
        <label>Image:</label>
        <input type="file" name="Recipe-image" class="recipeimage" accept=".jpg , .png" value={PodcastImage} onChange={handlePodcastImage}/>
        </div>
        
        <div className="actions">
          <button
            className="button"
            type = 'submit'
          >
            Add 
          </button>
        </div>
        </form>
      </div>
    )}
  </Popup>
)};

export default Modulep