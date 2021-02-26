import React from 'react';

class SearchBar extends React.Component {
    state = {
        query: '',
        inStock: false
    }

    handleChange = (event) => {
        let { name, value, type } = event.target;

        if (type === 'checkbox') {
            value = event.target.checked;
        }

        this.setState({
            [name]: value
        }, () => {
            this.executeSearchQuery(this.state);
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        //this.props.addTheMovie(this.state);

        this.setState({
            query: ''
        })
    }

    render() {
        const { query, inStock } = this.state;
        return (
            <form onSubmit={this.handleFormSubmit}>

                <input type='text' name='query' onChange={this.handleChange} placeholder='search products' value={query} />

                <button type='submit'>Search</button>
            </form>
        )


    }
}

export default SearchBar;