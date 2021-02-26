import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
    state = {
        onlyInStock: false,
        query: ''
    }

    handleSearchQuery = (filter) => {
        const { searchQuery, onlyInStock } = filter;
        const { products } = this.props;
        let visibleProducts =
            [...products].filter((product) => {
                return product.name.toLowerCase().includes(searchQuery.toLowerCase())
            })

        if (onlyInStock) {
            visibleProducts = visibleProducts.filter((product) => {
                return product.stocked
            })
        }
        this.setState(() => {
            return {
                query: searchQuery
            }
        })
    }



    render() {
        const { products } = this.props;
        return (
            <>
                <SearchBar executeSearchQuery={this.handleSearchQuery} />
                <ProductTable productList={products} />
            </>
        )

    }
}

export default FilterableProductTable;