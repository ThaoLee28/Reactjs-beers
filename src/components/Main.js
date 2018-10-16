import React, { Component } from 'react';
import BeerList from './BeerList';

class Main extends Component {
    render() {
        return (
            <main className="container mx-auto">
                <BeerList/>
            </main>
        );
    }
}
export default Main