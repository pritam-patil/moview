import React from 'react';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import './spinner.css';

const Loader = props => (
    <div className="tab-spinner">
        <ScaleLoader
            loading={props.isFetching}
            color={'#123abc'}
        />
    </div>
);

Loader.defaultProps = {
    isFetching: true
}

Loader.propTypes = {
    isFetching: PropTypes.bool
};

export default Loader;