import React, {Component} from 'react';

// Displays the loading gif
class LoadingGif extends Component {
    render() {
        // show the loading gif if the parent has set the loading variable to true
        if (this.props.loading) {
            return <div className="loader"/>;
        }
        return <div />;
    }
}

export default LoadingGif;