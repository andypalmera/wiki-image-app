import React from 'react';
import { Link } from 'react-router-dom';
import './ImageList.css';

const ImageList = (props) => {
    return (
        <div key={props.id} className="image-list">
            {props.images.map((image) => {
                return (
                    <div key={image.id} className="image-item">
                        <img src={image.largeImageURL} alt={image.tags} />

                        <Link
                            to={{
                                pathname: `/image/${image.id}`,
                                state: { image },
                            }}
                        >
                            <button>View</button>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ImageList;
