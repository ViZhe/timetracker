
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './index.css';


const Home: React.FC = () => (
  <div className="home">
    <div className="home__box">
      <div className="home__header">Hello, anonymous!</div>
      <div className="home__body">Let's start tracking you time together &#59;&#41;</div>
      <div className="home__footer">
        <Link to="/my">
          <Button type="primary" icon="play-circle" size="large">Start</Button>
        </Link>
      </div>
    </div>
  </div>
);


export default React.memo(Home);
