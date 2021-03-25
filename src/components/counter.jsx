import React, { Component } from 'react';

export class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('App - Updated');
    // console.log('Previous Props: ', prevProps);
    // console.log('Previous State: ', prevState);
    // if(prevProps.counter.value !== this.props.counter.value){
    //     // Ajax call and get new data from the server
    // }
  }

  componentWillUnmount() {
    console.log('Component - Unmount');
  }

  state = {
    // count: this.props.counter.value,
    tags: ['Tag One', 'Tag Two', 'Tag Three'],
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  getBadgesClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    const condition = value === 0;
    const x = 'Zero';
    const y = value;
    return condition ? x : y;
  }

  renderTags() {
    const condition = this.state.tags.length === 0;
    const x = <p>There are not tags</p>;
    const y = this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
    return condition ? x : y;
  }

  //   handleIncrement = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  render() {
    return (
      <div className="col-md-2">
        {this.props.children}
        <div>
          <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
        </div>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm ml-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <p>{this.state.tags.length === 0 && 'Please create a new tag!'}</p>
        <ul>{this.renderTags()}</ul>
      </div>
    );
  }
}

export default Counter;
