import React, { Component } from 'react';
import Search from './Search';
import BeerList from './BeerList';

class Main extends Component {
    render() {
        return (
            <main className="container mx-auto">
                <Search/>
                <BeerList/>
            </main>
        );
    }
}
export default Main