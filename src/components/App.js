import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../containers/App.css';
import Search from '../components/Search';
import ShowMore from '../containers/ShowMore';
import ImageGrid from '../containers/ImageGrid';
import LoadingGif from '../containers/LoadingGif';
import axios from '../../node_modules/axios/dist/axios';

// This is the main App Component
// It loads all the child components need to display the page
class App extends Component {
    // We initialize the app with default value
    constructor() {
        super();
        this.state = {
            init: true,
            images: [],
            page: 0,
            lastPageReached: false,
            tags: "",
            limit: 20,
            imgSize: "small"
        };

        // .bind(this) binds this to the function, so when we refer to this.loadMore in this.loadNextPage it get the function
        this.loadMore = this.loadMore.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
        this.loadNextPage = this.loadNextPage.bind(this);
    }

    // This function takes the tags, imgSize and page. It adds the new image urls to the existing image list.
    loadMore(tags, imgSize, page, limit, reset) {
        // If a new search is started we reset the state
        if (reset) {
            this.setState({
                images: [],
                page: page,
                lastPageReached: false,
                init: true,
                tags: tags,
                limit: limit,
                imgSize: imgSize,
                loading: true
            });
        }

        // we make a call to giphy to get the search results
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${encodeURI(tags.replace("#", ""))}&api_key=dc6zaTOxFJmzC&limit=${limit}&offset=${page * 25}`).then(res => {
            const urls = res.data.data.map(obj => {
                // based on which size the user has selected we load the appropriate image
                switch (imgSize) {
                    case "medium":
                        return obj.images.fixed_width.url;
                    case "large":
                        return obj.images.original.url;
                    default:
                        return obj.images.fixed_width_small.url;
                }
            });
            // we update the state that re-renders the child components, and setup for the next page call.
            this.setState({
                images: this.state.images.concat(urls),
                lastPageReached: urls.length === 0, // set the lastPageReached to true if the search result was empty.
                limit: limit,
                page: page + 1, // increase the page number for the next page call.
                init: false,
                loading: false
            });
        });
    }

    // When the search button is clicked reset the previous search and start from page/offeset 0;
    resetSearch(tags, imgSize) {
        // based on the selected image size we change the number of images we want to receive per page
        let limit = 20;
        switch (imgSize) {
            case "medium":
                limit = 16;
                break;
            case "large":
                limit = 8;
                break;
            default:
                limit = 20;
        }
        // this calls the loadMore function in reset mode
        this.loadMore(tags, imgSize, 0, limit, true);
    };

    // When the show more button is clicked we load more images
    loadNextPage() {
        // this calls the loadMore to get the next page
        this.loadMore(this.state.tags, this.state.imgSize, this.state.page, this.state.limit, false);
    };

    // the render function renders the specified html on the browser
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>

                {/*Responsible for user input for the search.
                 When the user clicks the search button in the child component it triggers the resetSearch function of this component.
                 The child also sends 2 variables (1. tags to search, 2. Selected image size)
                 */}
                <Search onSearch={this.resetSearch}/>

                {/*Responsible for displaying the search results.
                 This component takes 3 inputs:
                 1. the image urls
                 2. the image size
                 3. init which indicates if the user has not made any searches yet
                 */}
                <ImageGrid images={this.state.images} imgSize={this.state.imgSize} init={this.state.init}/>

                {/*The loading gif appears when a search request is made, but we haven't received the response yet.
                 1. This component pass down the loading variable which indicates if a search is in progress.
                 2. init which indicates if the user has not made any searches yet
                 */}
                <LoadingGif loading={this.state.loading} init={this.state.init}/>

                {/*Responsible for loading more results until the end is reached.
                 1. When the user clicks the load more button it calls the loadNextPage function in this component,
                 which in turn calls the loadMore function and gets the next set of images from giphy.
                 2. LoadNextPage indicates to the child that there are more pages to load.
                 3. init which indicates if the user has not made any searches yet
                 */}
                <ShowMore lastPageReached={this.state.lastPageReached} loadNextPage={this.loadNextPage}
                          init={this.state.init}/>
            </div>
        );
    }
}

export default App;