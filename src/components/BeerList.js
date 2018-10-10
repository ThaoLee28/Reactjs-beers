import React, { Component } from 'react';
//import axios from 'axios';

class BeerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            beers: []
        };
    }
    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers")
            .then(res => res.json())
            .then(
                results => {
                    this.setState({
                        isLoaded: true,
                        beers: results
                    })
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    render () {
        const { beers } = this.state;
        return(
            <div className="container mx-auto my-5">
                <h2 className="my-5">List of beers <span>do not buy them all !</span></h2>
                <div className="list-beers flex flex-row">
                    <ul className="list-reset w-1/3">
                        {beers.map(beer=> (
                            <li className="bg-green-lightest py-5 pl-3 shadow-md border-b-2">
                                <a href="/" className="no-underline text-black">{beer.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="w-2/3 bg-teal-lightest">

                    </div>
                </div>
            </div>
        );
    }
}
  
export default BeerList;