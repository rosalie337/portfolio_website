import React, { Component } from 'react'
import developerData from '../developerData'

export default class Header extends Component {
    render() {
        return (
            <>
                <header id="home">
                    <div className="row banner" >
                        <div className="banner-text">
                            <h1 className="responsive-headline">
                                Hi, I'm {developerData.name}.
                            </h1>
                            <h3> 
                                I am a {developerData.role[0].title}.
                            </h3>
                            <h4>
                                I am currently {developerData.seeking}.
                            </h4>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
