import React from 'react';
import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

const NotFound = (props) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Not Found</title>
                <link rel="canonical" href="http://google.com" />
            </Helmet>
            {/* <Header /> */}
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-12 text-center mt-5">
                        <p className="notfound"><i style={{ color: '#F46F34' }} className="fa fa-exclamation-triangle"></i>&nbsp;Not Found</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NotFound;