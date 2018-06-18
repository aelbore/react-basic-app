import React from 'react';

const uniqueId = () => {
  let m = Math, d = Date, h = 15;
  let s = s => m.floor(s).toString(h);
  return s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));
}

const uniqueList = (array) => {
  return [ ...new Set(array) ];
};

export class ShadowContent extends React.Component {

  constructor(props) {
    super(props);   
    this.state = {
      linkStyles: this.props.stylesheet.linkStyles
    } 
  }

  componentWillReceiveProps(){
    console.log(this.props);
  }

  render(){
    const { 
      stylesheet = { inlineStyles, linkStyles }, 
      id = uniqueId(),
      children  
    } = this.props;

    return (
      <div id={ id }>
        {
          (stylesheet && stylesheet.linkStyles && stylesheet.linkStyles.length > 0)
          ? uniqueList(stylesheet.linkStyles).map(linkStyle => {
              return <link key={ uniqueId() } rel="stylesheet" type="text/css" href={linkStyle} />
            })
          : null
        }
        { 
          (stylesheet && stylesheet.inlineStyles && stylesheet.inlineStyles.length > 0) 
          ? React.createElement('style', {
              scoped: true,
              dangerouslySetInnerHTML: { __html: stylesheet.inlineStyles.join('\n') }
            })
          : null
        }
        { children }
      </div>
    )     
  }

}