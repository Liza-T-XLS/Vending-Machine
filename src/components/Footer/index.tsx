// == Imports

import React from 'react';

import './footer.scss';

// == Component

const Footer = () => {
  return (
      <footer className="footer">
         <p>&copy; 2021 -&nbsp;
          <a href="https://liza-t-xls.netlify.app/index-eng.html" title="Liza-t-xls" target="_blank" rel="noopener noreferrer">Liza-T-XLS
          </a>
        </p>
        <p className="credits">Icons made by <a href="https://www.freepik.com" title="Freepik" target="_blank" rel="noopener noreferrer">Freepik</a> and monkik from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
        </p>
      </footer>
  );
}

// == Export

export default Footer;