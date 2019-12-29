import NavigationBar from './NavigationBar';
import React from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import SearchResult from "./SearchResult";

const apiConfig = require('../api-config');

class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            searchString: "",
            serverDown: false
        };

        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(event){
        const target = event.target;
        const value = target.value;
        this.setState({
            searchString: value
        });
        this.doSearch(value);
    }
    doSearch(searchString){
        const url = apiConfig.serverUrl + '/sales?q=' + searchString;
        axios.get(url)
            .then((response) => {
                this.setState({
                    searchResults: response.data.sales
                });
            }).catch((error) => {
            if(!error.response) this.setState({
                serverDown: true
            });
        });
    }

    render() {
        let sales = [];
        if (this.state.searchString){
            sales = this.state.searchResults.map((sale) =>
                <ItemCard sale={sale} />
            );
        }
        return (
            <div style={{backgroundColor:'whitesmoke', paddingBottom:'30px'}}>
                <NavigationBar page={this.props.page}
                               loggedIn={this.props.loggedIn}
                               user={this.props.user}
                               handleSearch={this.handleSearch} />
                {this.state.searchString ?
                    <SearchResult searchString={this.state.searchString}
                                  sales={sales}
                                  serverDown={this.state.serverDown} />
                    : this.props.children}
            </div>
        );
    }
}

export default Layout;