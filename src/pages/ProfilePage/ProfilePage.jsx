import "./ProfilePage.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function ProfilePage() {
  const { user} = useContext(AuthContext);
  return (
    <div className="top">
      <h1>Welcome Back {user && user.name}</h1>
      <h1>Uploads</h1>
    </div>
  );
}

export default ProfilePage;
