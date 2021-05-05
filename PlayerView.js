import React from 'react';
import {View} from 'react-native';

export default class PlayerView extends React.Component {

    componentDidMount() {
        console.log('PLAYERVIEW', 'mounting');
    }

    componentWillUnmount() {
        console.log('PLAYERVIEW', 'unmounting');
    }

    render() {
        const {style} = this.props;
        return <View style={style}/>;
    }
}

