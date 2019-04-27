import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Image = props => {
  const backgroundStyle = {
    backgroundImage: `url(${props.url})`
  };
  return (
    <div
      className={`${props.className} movie-backdrop`}
      style={backgroundStyle}
    />
  );
};

Image.propTypes = ({
  url: PropTypes.string,
  className: PropTypes.string
});

export default Image;
