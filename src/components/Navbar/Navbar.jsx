import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>I-MOVIE</button>
      </Link>
      <Link to="/movie">
        <button>Movies</button>
      </Link>
      <Link to="/series">
        <button>Series</button>
      </Link>
      <Link to="/podcast">
        <button>Podcast</button>
      </Link>


      {isLoggedIn && (
        <>
          <Link to="/profile">
            <button>Profile</button>
            {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
          </Link>
          
          <button onClick={logOutUser}>Logout</button>

        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button>SIGN UP</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>LOGIN</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
