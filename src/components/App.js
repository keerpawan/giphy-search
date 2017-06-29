import React, {Component} from 'react';
import logo from '../images/logo.svg';
import '../containers/App.css';
import Search from '../components/Search';
import ShowMore from '../components/ShowMore';
import ImageGrid from '../components/ImageGrid';
import LoadingGif from '../components/LoadingGif';
import axios from '../../node_modules/axios/dist/axios';

class App extends Component {
    constructor() {
        super();
        this.state = {
            init: true,
            images: [],
            page: 0,
            totalCount: 0,
            lastPageReached: false,
            tags: "",
            limit: 20,
            imgSize: "small"
        };

        this.loadMore = this.loadMore.bind(this);
        this.resetSearch = this.resetSearch.bind(this);
        this.loadNextPage = this.loadNextPage.bind(this);
    }

    // This function takes the tags, imgSize and page. It adds the new image urls to the existing image list.
    loadMore(tags, imgSize, page, limit, reset) {
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
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${encodeURI(tags.replace("#", ""))}&api_key=dc6zaTOxFJmzC&limit=${limit}&offset=${page * 25}`).then(res => {
            const urls = res.data.data.map(obj => {
                switch (imgSize) {
                    case "medium":
                        return obj.images.fixed_width.url;
                    case "large":
                        return obj.images.original.url;
                    default:
                        return obj.images.fixed_width_small.url;
                }
            });
            this.setState({
                images: this.state.images.concat(urls),
                lastPageReached: urls.length === 0,
                limit: limit,
                page: page + 1,
                init: false,
                loading: false
            });
        });
    }

    // When the search button is clicked reset the previous search and start from page/offeset 0;
    resetSearch(tags, imgSize) {
        // 197
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

        this.loadMore(tags, imgSize, 0, limit, true);
    };

    // When the show more button is clicked we load more images
    loadNextPage() {
        this.loadMore(this.state.tags, this.state.imgSize, this.state.page, this.state.limit, false);
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>

                {/*Responsible for user input for the search*/}
                <Search onSearch={this.resetSearch}/>

                {/*Responsible for displaying the search results*/}
                <ImageGrid images={this.state.images} imgSize={this.state.imgSize} init={this.state.init}/>

                <LoadingGif loading={this.state.loading} init={this.state.init}/>

                {/*Responsible for loading more results until the end is reached*/}
                <ShowMore lastPageReached={this.state.lastPageReached} loadNextPage={this.loadNextPage}
                          init={this.state.init}/>
            </div>
        );
    }
}

export default App;