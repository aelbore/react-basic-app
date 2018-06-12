import React from 'react';
import InlineCss from "react-inline-css";

import { register } from 'web-react-components';
import styles from './index.scss';
import core from './hello.scss';

const Index = () => {  
  return (
      <InlineCss stylesheet={styles + core}>
        <div className='title'>
          Hello React!
        </div>
      </InlineCss>
  )
};

register(Index, 'my-component');