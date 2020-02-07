import React from 'react';

// Components
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';
import Restart from './components/Restart/Restart';
import Loader from 'react-loader-spinner';

// Stylesheet
import './App.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class App extends React.Component {

  state = {
    counter: 0,
    clicked: false,
    name: 'Juanito',
  };
  
  componentDidMount() {
    document.addEventListener('incremented', (e) => {
      this.setState({
        ...this.state,
        counter: this.state.counter + 1
      });
    });
    document.addEventListener('restart-count', (e) => {
      this.setState({
        ...this.state,
        counter: 0,
      });
    });
  }

  render () {
    return (
      <div className="app-container">
        <Counter number={this.state.counter} name={this.state.name}/>
        <Button />
        <Restart/>
        <Loader type="MutatingDots" color="#0B12A6"></Loader>
      </div>
    );
  }

}

export default App;
