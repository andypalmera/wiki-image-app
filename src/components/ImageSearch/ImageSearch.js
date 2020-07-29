import React from 'react';
import './ImageSearch.css';

const ImageSearch = (props) => {
    return (
        <div className="image-search">
            <div className="image-search-title-container">
                <h1 className="image-search-title"> WIKI IMAGE</h1>
            </div>
            <form onSubmit={props.getInfo} className="image-search-form">
                <input
                    type="text"
                    placeholder={props.error === null ? 'type a value' : 'type a valid search value'}
                    className="Image-input"
                    name="searchValue"
                    autoComplete="off"
                    onChange={(e) => props.changeValue(e)}
                    value={props.value}
                />
                <button className="btn-personal-style">Search</button>
            </form>
        </div>
    );
};
export default ImageSearch;
