import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      
    };
  }

  render() {
    console.log('Directory props', this.props);
    return (
      <div className="directory-menu">
        {this.state.sections.map(section => (
          <MenuItem key={section.id} section={section} />
        ))}
      </div>
    );
  }
}

export default Directory;
