import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="h-auto bg-orange px-5">
                <div className="text-center">
                    <a href="/">
                        <img src="/images/logo.png" alt="" className="w-64 h-48"/>
                    </a>
                    <h1 className="text-white font-bold text-5xl">Reactjs - MyBeerShop</h1>
                    <p className="py-5">We have a Beer shop and you can get list of beers in this API to show on website.</p>
                </div>
            </header>
        );
    }
}
export default Header