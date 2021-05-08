import React from 'react';

import Search from './search';
import { Helmet } from "react-helmet";

function Homepage() {
    return (
        <div>
            <Helmet>

                <title>Search Engine - Kolapo "Kay" Babawale</title>

            </Helmet>
            
            <Search />
        </div>
    );
}

export default Homepage;