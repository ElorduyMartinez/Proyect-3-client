import Modulep from "../../components/ModuleP/Modulep";
import "./PodcastPage.css"
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
function PodcastPage (){
    const { isLoggedIn, } = useContext(AuthContext);
    return (
        <div className="Top">
        {isLoggedIn && (
        <>
             <label>Podcast</label>
            <Modulep/> 
        </>
      )}

      {!isLoggedIn && (
        <>
        <label>Podcast</label>
        </>
      )}
        </div>
    )
}

export default PodcastPage;