import React, { Component } from 'react';
import Army from './withArm';

class Rahul extends Component {
    render() {
        return (
            <div>
                <h2>Camp: {this.props.camp}</h2>
                <h3 onMouseOver={this.props.hochandleGunshots}>
                    Rahul {this.props.hocgunname} Gunshots: {this.props.hocgunshots}
                </h3>
            </div>
        );
    }
}

export default Army(Rahul,10);