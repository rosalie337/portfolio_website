import React, { Component } from 'react'
import developerData from '../developerData'

export default class Portfolio extends Component {
    render() {
        return (
            <>
                <h1>Portfolio</h1>
                <h3> 
                {developerData.portfolio[0].title}
                </h3>

            </>
        )
    }
}

