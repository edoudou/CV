/**
 * Created by ESH3655 on 01/06/2017.
 */
import React, { Component } from 'react';
import './App.css';

class Section extends Component {
    render() {
        return (
            <div className="Section">
                <div className="SectionTitleDiv">
                    <p className="SectionTitle">
                        {this.props.title}
                    </p>
                </div>
                <div className="SectionContent">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Section;
