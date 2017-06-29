import React, {Component} from 'react';
import ImageBlock from './ImageBlock';

// Loops through the images and creates an image block component for each image
class ImageGrid extends Component {
    render() {
        if (this.props.images && this.props.images.length > 0) {

            return <div className="imagesGrid">
                {
                    this.props.images.map((img, index) =>
                        <ImageBlock img={img} imgSize={this.props.imgSize} key={index} />
                    )
                }
            </div>;
        }
        // display no images found if the length of the props images is 0
        else if (!this.props.init) {
            return <div className="noImages">No Images Found</div>;
        }
        // user has not made any searches yet
        else {
            return <div />;
        }
    }
}

export default ImageGrid;