import Modules from "../../components/ModuleS/Modules";
import "./SeriesPage.css"
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
function SeriesPage (){
    const { isLoggedIn, } = useContext(AuthContext);
    return (
        <div className="Top">
        {isLoggedIn && (
        <>
             <label>Series</label>
            <Modules/> 
        </>
      )}

      {!isLoggedIn && (
        <>
        <label>Series</label>
        </>
      )}
        </div>
    )
}

export default SeriesPage;