import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BeerItem from './BeerItem';

class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        };
    }
    componentDidMount() {
        fetch("https://api.punkapi.com/v2/beers/")
            .then(res => res.json())
            .then(
                results => {
                    this.setState({
                        beers: results
                    })
                },
            )
    }
    render () {
        const { beers } = this.state;
        return(
            <Router>
                <div className="container mx-auto my-5 w-full">
                    <h2 className="my-5 px-2">List of beers!</h2>
                    <div className="list-beers flex flex-row">
                        <ul className="list-reset w-1/3">
                            {beers.map(beer=> (
                                <li className="bg-black py-5 pl-3 shadow-md border-b-2" key={beer.id}>
                                    <Link to={"/" + beer.id} className="no-underline text-white font-bold">{beer.name}</Link>
                                </li>
                                
                            ))}
                        </ul>
                        <div className="w-2/3 bg-teal-lightest p-5">
                            <h3>Description</h3>
                            <Route exact path ={"/:id"} component={BeerItem}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default BeerList;