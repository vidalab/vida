import React, { Component } from 'react';
import vizJson from './web/public/viz/viz.json'
import DataLoader from './web/src/components/Charts/DataLoader'

export default class VidaComponent extends Component {
    render () {
        return (
            <div>
                <div>I am a Vida react npm module</div>
                <DataLoader vizData={vizJson} />
            </div>
        )
    }
}

