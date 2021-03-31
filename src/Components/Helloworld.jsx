import React from 'react'

class Helloworld extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.message}  {this.props.name}</p>
      </div>
    );
  }
}

export default Helloworld