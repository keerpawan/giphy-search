import React, {Component} from 'react';

// The search component
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {tags: "", imgSize: "small"};

        // .bind(this) makes this.props.onSearch available in the onSearchClick function to call
        this.onSearchClick = this.onSearchClick.bind(this);
    }

    // when the user enters in the text field we update the component's state
    updateTagValue(evt) {
        this.setState({tags: evt.target.value});
    };

    // when the user selects the image size we update the component's state
    updateSizeValue(evt) {
        this.setState({imgSize: evt.target.value});
    }

    // this function is called when the user clicks the search button
    onSearchClick() {
        // checks if the user has entered some text, if not then alerts the user to do so.
        if (this.state.tags.length === 0)
            alert("Please enter some tags to search");
        else
            this.props.onSearch(this.state.tags, this.state.imgSize) // we can do this because of .bind(this), as mentioned above
    }

    render() {
        return (
            <div>
                <div className="searchBar">
                    <div className="searchTitle">GIPHY Image Search</div>
                    <input className="input" placeholder="#coffee" type="text" value={this.state.tag}
                           onChange={evt => this.updateTagValue(evt)}/>

                    <button className="button" onClick={this.onSearchClick}>Search</button>

                    <hr width="90%"/>
                </div>
                <div className="imageSizeSelector">
                    Image Size:
                    <input className="radio" type="radio" value="small" name="imgSize"
                           onClick={evt => this.updateSizeValue(evt)}
                           defaultChecked/> Small
                    <input className="radio" type="radio" value="medium" name="imgSize"
                           onClick={evt => this.updateSizeValue(evt)}/>
                    Medium
                    <input className="radio" type="radio" value="large" name="imgSize"
                           onClick={evt => this.updateSizeValue(evt)}/> Large
                </div>
            </div>
        );
    }
}

export default Search;