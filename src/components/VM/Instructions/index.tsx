// == Imports

import React from 'react';

// == Component

type Props = {
  instructionsMsg: string,
};

const Instructions = ({ instructionsMsg }: Props) => (
    <div className="instructions">
      <p className="message" data-text={instructionsMsg}>{instructionsMsg}</p>
    </div>
);

// == Export

export default Instructions;