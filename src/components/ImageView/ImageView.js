import React from 'react';
import { Link } from 'react-router-dom';
import './ImageView.css';

const ImageView = (props) => {
    const { largeImageURL, tags, user, pageURL } = props.location.state.image;
    return (
        <div className="image-container">
            <img src={largeImageURL} alt={tags} />
            <p>&copy; pixxaBay</p>
            <h4 className="holavale">
                Credits: <span> {user}</span>
            </h4>
            <h4>
                Download:{' '}
                <a target="_blank" rel="noopener noreferrer" href={pageURL}>
                    go to download
                </a>
            </h4>
            <Link
                to={{
                    pathname: '/',
                }}
            >
                <button>Home</button>
            </Link>
        </div>
    );
};

export default ImageView;
