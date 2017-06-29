import React, {Component} from 'react';
import ImageBlock from '../components/ImageBlock';

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
        else if (!this.props.init) {
            return <div className="noImages">No Images Found</div>;
        }
        else {
            return <div />;
        }
    }
}

export default ImageGrid;