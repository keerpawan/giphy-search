import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {tags: "", imgSize: "small"};

        this.onSearchClick = this.onSearchClick.bind(this);
    }

    updateTagValue(evt) {
        this.setState({tags: evt.target.value});
    };

    updateSizeValue(evt) {
        this.setState({imgSize: evt.target.value});
    }

    onSearchClick() {
        if (this.state.tags.length === 0)
            alert("Please enter some tags to search");
        else
            this.props.onSearch(this.state.tags, this.state.imgSize)
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