/**
 * Created by ESH3655 on 02/06/2017.
 */
import React, { Component } from 'react';
import './App.css';

class CVHeader extends Component {
    render() {
        return (
            <div className="CVHeader col-md-12">
                <div className="col-md-4">
                    <div className="CVHeaderTitleDiv">
                        <p className="CVHeaderTitle">{this.props.title}</p>
                    </div>
                    <div className="CVHeaderSubtitleDiv">
                        <p className="CVHeaderSubtitle">{this.props.subtitle}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CVHeader;