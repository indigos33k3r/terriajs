'use strict';

import React from 'react';

const Branding = React.createClass({
    propTypes: {
        onClick: React.PropTypes.func
    },

    render() {
        return (
            <div className='branding'>
                <button className='logo btn' onClick={this.props.onClick}>
                    <img src="./images/terrarium.png" alt="national map" width="160"/>
                </button>
            </div>
        );
    }
});

module.exports = Branding;
