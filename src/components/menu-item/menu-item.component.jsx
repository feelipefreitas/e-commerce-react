import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = props => {
  const { title, imageUrl, size, linkUrl } = props.section;
  const { history, match } = props;
  const style = { backgroundImage: `url(${imageUrl})` };

  return (
    <div 
     style={style} 
     className={`${size} menu-item`} 
     onClick={() => history.push(match.url + linkUrl)}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
