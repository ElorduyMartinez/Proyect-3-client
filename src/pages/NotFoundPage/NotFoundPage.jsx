import "./NotFoundPage.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div id ="notfound">
      <div id="error">
        <span id="message">
          <div>
            <div id="text">
              <h3>Error 404</h3>
              <h4>Not found</h4>
              <Link to = "/">
                <p>
                The server didn't find the page URL you asked. Please go back or click on this text to go to the homepage.
                </p>
              </Link>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default NotFoundPage;
