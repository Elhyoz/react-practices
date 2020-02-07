import React from 'react';
import './App.css';

/* function HelloWorld(props) {
  return (
  <div id="hello">
    <h3>
      {
        props.subtitle
      }
    </h3>
    {
      props.mytext
    }
  </div>
  );
} */
class HelloWorld extends React.Component {

  state = {
    show: true,
  };
  toggleShow = () => {
    this.setState({show: !this.state.show});
  }
  render() {
    if (this.state.show) {
      return (
        <div id = "hello" >
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Toggle state show</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            No hay elementos
          </h1>
          <button onClick={this.toggleShow}>Toggle state show</button>
        </div>
      )
    }
  }
}

function App() {
  return (
    <div>
      This is my component:
      <HelloWorld mytext="Hola EzPk"  subtitle="lorem ipsum"/>
      <HelloWorld mytext="hola mundo" subtitle="Component two"/>
      <HelloWorld mytext="kiubo prro" subtitle="Component three"/>
    </div>
  );
}

export default App;
