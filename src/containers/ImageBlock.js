import React, {Component} from 'react';

class ImageBlock extends Component {
    render() {
        switch (this.props.imgSize) {
            case "medium":
                return <div className="imageGridMedium">
                    <img src={this.props.img} alt="Img not available" />
                </div>;
            case "large":
                return <div className="imageGridLarge">
                    <img src={this.props.img} alt="Img not available" />
                </div>;
            default:
                return <div className="imageGridSmall">
                    <img src={this.props.img} alt="Img not available" />
                </div>;
        }
    }
}

export default ImageBlock;