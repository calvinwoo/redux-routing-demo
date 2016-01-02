import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

const propTypes = {
  location: PropTypes.object,
  increase: PropTypes.func
};

export default class Box extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
    };
  }

  render() {
    return (
      <div style={{border: '3px black solid', padding: 10}}>
        <div className='pull-right'>
          <Link to={this.props.location.query.source}>X to Close</Link>
        </div>

        <h3>Custom Add Box</h3>

        <div>
          <input onChange={event => this.setState({amount: event.target.value})} />
          <button onClick={() => this.props.increase(this.state.amount)}>
            Add
          </button>
        </div>
      </div>
    );
  }
};

Box.propTypes = propTypes;
