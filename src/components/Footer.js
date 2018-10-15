import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-black h-auto text-white">
                <div className="container py-5 md:py-20 justify-center item-center mx-auto w-4/5 md:w-2/3 lg:w-1/2">
                    <div className="row text-center">
                        <h3 className="text-3xl">MYBEERSHOP</h3>
                        <p className="py-5 text-base">Shows the beers that exists with Punk API!</p>
                    </div>
                    <div className="row flex flex-wrap text-center">
                        <div className="py-2 w-full md:w-1/2">
                            <span className="text-3xl"><i className="fa fa-phone" aria-hidden="true"></i></span>
                            <p>123-456-6789</p>
                        </div>
                        <div className="py-2 w-full md:w-1/2">
                            <span className="text-3xl"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                            <p>feedback@punk.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer