import React from 'react';

// Displays the loading gif
function LoadingGif(props) {
    if (props.loading) {
        return <div className="loader"/>;
    }
    return <div />;
}

export default LoadingGif;