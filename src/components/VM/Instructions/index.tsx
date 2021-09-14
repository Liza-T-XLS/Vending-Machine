// == Imports

import React from 'react';
import PropTypes from 'prop-types';

// == Component

type Props = {
  instructionsMsg: string,
};

const Instructions = ({ instructionsMsg }: Props) => (
    <div className="instructions">
      <p className="message" data-text={instructionsMsg}>{instructionsMsg}</p>
    </div>
);

// == PropTypes

Instructions.propTypes = {
  instructionsMsg: PropTypes.string.isRequired,
};

// == Export

export default Instructions;