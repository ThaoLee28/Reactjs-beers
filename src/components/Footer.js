import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="bg-black h-auto text-white">
                <div class="container py-5 md:py-20 justify-center item-center mx-auto w-4/5 md:w-2/3 lg:w-1/2">
                    <div class="row text-center">
                        <h3 class="text-3xl">MYBEERSHOP</h3>
                        <p class="py-5 text-base">Shows the beers that exists with Punk API!</p>
                    </div>
                    <div class="row flex flex-wrap text-center">
                        <div class="py-2 w-full md:w-1/2">
                            <span className="text-3xl"><i class="fa fa-phone" aria-hidden="true"></i></span>
                            <p>123-456-6789</p>
                        </div>
                        <div class="py-2 w-full md:w-1/2">
                            <span className="text-3xl"><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                            <p>feedback@punk.com</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer