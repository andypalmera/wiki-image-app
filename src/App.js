import React from 'react';
import './App.css';
import ImageSeach from './components/ImageSearch/ImageSearch';
import ImageList from './components/ImageList/ImageList';

const KeyApi = '15981936-235ace528bea7fa1f82abfc14';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: [],
            error: null,
            notFound: false,
            value: '',
        };
    }
    changeValue = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    getInfo = async (e) => {
        e.preventDefault();
        let searchValue = this.state.value;
        const URL = `https://pixabay.com/api/?key=${KeyApi}&q=${searchValue}&image_type=photo`;
        const request = await fetch(URL);
        const response = await request.json();

        if (!searchValue) {
            this.setState({
                error: !this.state.error,
                value: '',
            });
            return false;
        } else {
            if (response.total < 1) {
                this.setState({
                    notFound: !this.state.notFound,
                    value: '',
                });
            } else {
                this.setState({
                    notFound: false,
                    image: response.hits,
                    error: null,
                    value: '',
                });
            }
        }
    };

    render() {
        return (
            <div className="App">
                <ImageSeach getInfo={this.getInfo} error={this.state.error} changeValue={this.changeValue} value={this.state.value} />
                {this.state.notFound ? <div className="not-found"> Not found</div> : <ImageList images={this.state.image} />}
            </div>
        );
    }
}

export default App;
