import Modulep from "../../components/ModuleP/Modulep";
import "./PodcastPage.css"
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import Cardp from "../../components/CardP/Cardp";
function PodcastPage (){
    const { isLoggedIn, } = useContext(AuthContext);
    return (
      <div>
        <div className="Top">
        {isLoggedIn && (
        <>
             <label>Podcast</label>
             <div className='float-btn'><Modulep/></div>
        </>
      )}

      {!isLoggedIn && (
        <>
        <label>Podcast</label>
        </>
      )}
        </div>
        <div className="Boxcardm">
          <Cardp />
        </div>
        </div>
    )
}

export default PodcastPage;