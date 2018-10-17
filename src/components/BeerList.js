import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BeerItem from './BeerItem';

class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            beers: []
        };
    }
    fetchBeers = () => {
        fetch("https://api.punkapi.com/v2/beers/")
            .then(res => res.json())
            .then(
                results => {
                    this.setState({
                        beers: results
                    })
                },
            )
            .catch(() => {
                console.log('Error');
            })
    }

    componentDidMount() {
        this.fetchBeers();
    }

    handleOnchange = (e) => {
        this.setState({ search: e.target.value });
    }

    render () {
        const { beers , search } = this.state;
        //console.log(beers);
        const filteredList = beers.filter(beer => {
            return beer.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 
        })
        return(
            <div>
                <div className="container mx-auto m-5 text-center">
                    <input 
                        onChange={this.handleOnchange}
                        value={this.state.search}
                        type="text" placeholder="Search..." 
                        className="bg-grey-lighter border-2 border-solid w-1/2 h-12 rounded px-5 hover:shadow focus:bg-white focus:boder-blue-light"/>
                </div>
                <Router>
                    <div className="container mx-auto my-5 w-full">
                        <h2 className="my-5 px-2">List of beers!</h2>
                        <div className="list-beers flex flex-row">
                            <ul className="list-reset w-1/3">
                                {filteredList.length > 0 && filteredList.map(beer=> (
                                    <li className="bg-black py-5 pl-3 shadow-md border-b-2" key={beer.id}>
                                        <Link to={"/" + beer.id} className="no-underline text-white font-bold">{beer.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="w-2/3 bg-teal-lightest p-5" style={this.state.search ? {} : { display: 'none' }}>
                                <h3>Description</h3>
                                <Route exact path ={"/:id"} component={BeerItem}/>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default BeerList;