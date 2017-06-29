import React from 'react';

// Button to click when there are more pages
function ShowMore(props) {
    // check if the last page has reached, if so then hide the button.
    if (!props.lastPageReached && !props.init) {
        return <div className="center">
            <button className="showMore" onClick={() => props.loadNextPage()}>Show More</button>
        </div>;
    }
    return <div />;
}

export default ShowMore;