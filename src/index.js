import React from 'react';
import ReactDOM from 'react-dom';

import { register } from 'web-react-components';

import InlineCss from "react-inline-css";

import * as styles from './index.scss';

const Index = () => {
  
  return (
      <InlineCss stylesheet={ `.title {
        color: blue;
        font-size: 24px;
      }` }>
        <div className="title">
          Hello React!
        </div>
      </InlineCss>
  )
};

register(Index, 'my-component');