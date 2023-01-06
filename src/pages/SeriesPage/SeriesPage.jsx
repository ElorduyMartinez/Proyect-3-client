import Modules from "../../components/ModuleS/Modules";
import "./SeriesPage.css"
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import Cards from "../../components/CardS/Cards";
function SeriesPage (){
    const { isLoggedIn, } = useContext(AuthContext);
    return (
      <div>
        <div className="Top">
        {isLoggedIn && (
        <>
             <label>Series</label>
             <div className='float-btn'><Modules/></div>
        </>
      )}

      {!isLoggedIn && (
        <>
        <label>Series</label>
        </>
      )}
        </div>
        <div className="Boxcardm">
          <Cards />
        </div>
      </div>
    )
}

export default SeriesPage;