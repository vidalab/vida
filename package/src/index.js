import React, { Component } from 'react';
import vizJson from './Charts/viz.json'
import DataLoader from './Charts/DataLoader'

export default class VidaComponent extends Component {
    render () {
        return (
            <div style={{width: "100%", height: "100%"}}>
                <div>I am a Vida react npm module</div>
                <DataLoader vizData={vizJson} />
            </div>
        )
    }
}
