import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

function PageNotFound() {
  return (
    <div className='oops-outer-container'>
      <div className='oops-inner-container'>
        <h1>Oops! Something went wrong...</h1>
        <Link id='error-link' to='/'>
          Back to Safety <span role="img" aria-label="construction worker dude">👷</span>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
