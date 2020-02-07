import React from 'react';

// Components
import Clock from '../Components/Class/Clock/Clock';
import LoginControl from '../Components/Class/LoginControl/LoginControl';
import NumberList from '../Components/Functionals/NumberList/NumberList';
import NameForm from '../Components/Class/NameForm/NameForm';
import FlavorForm from '../Components/Class/FlavorForm/FlavorForm';

// Stylesheet
import './App.css';

class App extends React.Component {
    render() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return (
            <div className="content-container">
                <Clock/>
                <LoginControl/>
                <NumberList numbers={numbers}/>
                <NameForm />
                <FlavorForm />
            </div>
        )
    }
}

export default App;