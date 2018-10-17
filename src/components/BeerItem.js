import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BeerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: []
        };
    }

    fetchBeer = (id) => {
        fetch("https://api.punkapi.com/v2/beers/" + id)
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
        this.fetchBeer(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.fetchBeer(nextProps.match.params.id)
        }
    }
    render() {
        const { beers } = this.state;
        //console.log(this.props.match.params.id);
        return ( 
            <div> {
                (beers || []).map(beer => ( 
                    <div key={beer.id} className="flex flex-col">
                        <div>
                            <p className="my-5">{beer.description}</p>
                        </div>
                        <div className="text-center w-full h-full">
                            <img src={beer.image_url} alt="" className="w-32 h-auto"/>
                        </div>
                    </div>
                ))} 
            </div>
        );
    
    }
}


export default withRouter(BeerItem)