import React from 'react';

import './menu-item.styles.scss';

const MenuItem = props => {
  const { title, imageUrl, size } = props.section;
  const style = { backgroundImage: `url(${imageUrl})` };

  return (
    <div style={style} className={`${size} menu-item`}>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
