import React, {Component} from 'react';

class ShowMore extends Component {
    render() {
        if (!this.props.lastPageReached && !this.props.init) {
            return <div className="center"><button className="showMore" onClick={() => this.props.loadNextPage()}>Show More</button></div>;
        }
        return <div />;
    }
}

export default ShowMore;