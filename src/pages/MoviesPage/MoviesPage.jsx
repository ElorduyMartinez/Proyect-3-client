

import "./MoviesPage.css"
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import Cardm from "../../components/CardM/Cardm";
import Modulem from "../../components/ModuleM/Modulem";


function MoviesPage (){
    const { isLoggedIn, } = useContext(AuthContext);
    
    return (
        <div>
        <div className="Top">
        {isLoggedIn && (
        <>
             <label>Movies</label>
             <div className='float-btn'><Modulem/></div>
        </>
      )}

      {!isLoggedIn && (
        <>
        <label>Movies</label>
        </>
      )}
        </div>
        <div className="Boxcardm">
          <Cardm />
        </div>
      </div>
    )
}

export default MoviesPage;