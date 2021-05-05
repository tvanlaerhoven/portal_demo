import React from 'react';
import {requireNativeComponent} from 'react-native';

const THEOplayerViewNative = requireNativeComponent('THEOplayerView', PlayerView);

export default class PlayerView extends React.Component {

    componentDidMount() {
        console.log('PLAYERVIEW', 'mounting');
    }

    componentWillUnmount() {
        console.log('PLAYERVIEW', 'unmounting');
    }

    render() {
        const {style} = this.props;
        return <THEOplayerViewNative
            style={style} autoplay={true}
            source={
                {
                    sources: [{
                        type: 'application/x-mpegurl',
                        src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
                    }],
                    poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
                }
            }/>;
    }
}

