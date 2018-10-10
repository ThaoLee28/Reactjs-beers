import React, { Component } from 'react';

class Search extends Component {
    render () {
        return (
            <div className="container mx-auto m-5 text-center">
                <form className="">
                    <input type="text" placeholder="Search..." className="border-2 border-solid w-1/2 h-12 rounded px-5 hover:shadow focus:border-none"/>
                </form>
            </div>
        );
    }
}

export default Search