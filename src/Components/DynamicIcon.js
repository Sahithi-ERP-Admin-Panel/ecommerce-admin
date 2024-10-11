import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

const DynamicIcon = ({ iconName, primaryColor = '#1f38b2', secondaryColor = '#1ec6f1' }) => {
  // Access the icon from the imported icons using the iconName prop
  const IconComponent = solidIcons[iconName];

  // Check if the icon exists
  if (!IconComponent) {
    return <div>Icon not found</div>;
  }

  return (
    <FontAwesomeIcon
      icon={IconComponent}
      style={{
        '--fa-primary-color': primaryColor,
        '--fa-secondary-color': secondaryColor, // Fixed typo here
        '--fa-secondary-opacity': 1,
      }}
      size="3x"
    />
  );
};

export default DynamicIcon;
