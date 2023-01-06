import "./HomePage.css";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div id= 'home'>
      <div id = "homei"><h1>I-MOVIE</h1></div>
        <div id = 'movie'>
          <div id= 'moviei'><h2>Movies</h2> <Link to ="/movie"><button>See more...</button></Link></div>
          
        </div>
        <div id = 'series'>
          <div id= 'seriesi'><h2>Series</h2> <Link to ="/series"><button>See more...</button></Link></div>
          
        </div>
        <div id = 'podcast'> 
          <div id= 'podcasti'><h2>Podcast</h2> <Link to ="/podcast"><button>See more...</button></Link></div>
         
        </div>
    </div>
  );
}

export default HomePage;
