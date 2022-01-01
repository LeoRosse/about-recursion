import * as React from 'react';

class Layout extends React.Component {
  state = {
    test: false,
  };

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    setTimeout(() => {
      window.console.log('io farò cose');
    }, 3000);
  }

  render() {
    window.console.log('mi sto renderizzando Layout');

    return <div className="border-4">{this.props.children}</div>;
  }
}

export { Layout };
