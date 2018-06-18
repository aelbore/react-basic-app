import * as React from 'react';
import { ShadowContent } from './shadow-content';

import '../main.css';
import appStyles from './app.scss';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { linkStyles: [] };
  }

  componentDidMount() {
    this.setState({ 
      linkStyles: this.props.linkStyles 
        ? this.props.linkStyles : [] 
    });  
  }

  render() {
    return (
        <ShadowContent stylesheet={{ 
          inlineStyles: [ appStyles ],
          linkStyles: this.state.linkStyles
        }}>
          <div className='title'>
            Hello React!
          </div>
        </ShadowContent>
    )
  }
}