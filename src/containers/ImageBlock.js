import React, {Component} from 'react';

// Responsible for showing a single block in the image grid
class ImageBlock extends Component {
    render() {
        // show the different block based on the images size selected by the user
        switch (this.props.imgSize) {
            case "medium":
                return <div className="imageGridMedium">
                    <img src={this.props.img} alt="Img not available" width="100%" />
                </div>;
            case "large":
                return <div className="imageGridLarge">
                    <img src={this.props.img} alt="Img not available" width="100%" />
                </div>;
            default:
                return <div className="imageGridSmall">
                    <img src={this.props.img} alt="Img not available" width="100%" />
                </div>;
        }
    }
}

export default ImageBlock;