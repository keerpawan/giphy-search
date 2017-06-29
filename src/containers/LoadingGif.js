import React, {Component} from 'react';

class LoadingGif extends Component {
    render() {
        if (this.props.loading) {
            return <div className="loader"/>;
        }
        return <div />;
    }
}

export default LoadingGif;