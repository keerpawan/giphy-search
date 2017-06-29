import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import ImageSearch from '../components/ImageSearch';

// This is the main App Component
// It loads all the child components need to display the page
class App extends Component {

    // the render function renders the specified html on the browser
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>

                <ImageSearch />
            </div>
        );
    }
}

export default App;