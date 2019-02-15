
import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';


const NotFound: React.FC = () => (
  <div className="notFound">
    <div className="notFound__box">
      <div className="notFound__header">Oops, hmmm!</div>
      <div className="notFound__body">Something went wrong.</div>
      <div className="notFound__footer">
        <Link to="/" className="notFound__btn">Home</Link>
      </div>
    </div>
  </div>
);


export default NotFound;
