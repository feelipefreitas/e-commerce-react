import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySelections } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(section => (
      <MenuItem key={section.id} section={section} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections
});

export default connect(mapStateToProps)(Directory);
