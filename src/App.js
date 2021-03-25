import React, { Component } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 7 },
    ],
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  componentDidMount() {
    console.log('App - Mounted');
    // Ajax Call
    // this.setState({movies})
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    console.log('App - Rendered');
    return (
      <React.Fragment>
        <header className="App-header">
          <Navbar
            totalCounters={
              this.state.counters.filter((c) => c.value > 0).length
            }
          />
          <img src={logo} className="App-logo" alt="logo" />
          <p>App with React</p>
        </header>
        <main className="App container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

// Lifecycle Hooks -> only used in classes not in stateless functional component

/* Mount
    constructor
    render
    componentDidMount -> usado cuando el componente se renderiza por primera vez para las primeras peticiones ajax (base de datos u otro servidor)
 */

/* Update
    render
    componentDidUpdate -> utilizado para actualizar la app o componente mediante una accion
 */

/** Unmount
 * componentWillUnmount -> se ejecuta cuando un elemento del dom es eliminado
 */
