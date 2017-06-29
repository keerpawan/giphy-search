import React, {Component} from 'react';

// Button to click when there are more pages
class ShowMore extends Component {
    render() {
        // check if the last page has reached, if so then hide the button.
        if (!this.props.lastPageReached && !this.props.init) {
            return <div className="center"><button className="showMore" onClick={() => this.props.loadNextPage()}>Show More</button></div>;
        }
        return <div />;
    }
}

export default ShowMore;