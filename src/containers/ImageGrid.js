import React from 'react';
import ImageBlock from './ImageBlock';

// Loops through the images and creates an image block component for each image
function ImageGrid(props) {
    if (props.images && props.images.length > 0) {

        return <div className="imagesGrid">
            {
                props.images.map((img, index) =>
                    <ImageBlock img={img} imgSize={props.imgSize} key={index}/>
                )
            }
        </div>;
    }
    // display no images found if the length of the props images is 0
    else if (!props.init) {
        return <div className="noImages">No Images Found 2</div>;
    }
    // user has not made any searches yet
    else {
        return <div />;
    }
}

export default ImageGrid;