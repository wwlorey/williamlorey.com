import React from "react";
import { Link } from "react-router-dom";
import './ErrorPage.css';

function PageNotFound() {
  return (
    <div className="oops-outer-container">
      <div className="oops-inner-container">
        <h1>Oops! Something went wrong...</h1>
        <Link className="go-home" to='/'>Back to Safety 👷</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
