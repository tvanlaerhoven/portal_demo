import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Dimensions} from 'react-native';
import {PortalDestination, PortalOrigin} from "rn-native-portals";
import PlayerView from "./PlayerView";
import Orientation from 'react-native-orientation-locker';

class BasicScreen extends React.Component {

    constructor() {
        super();
        this.state = {fullscreen: false};
    }

    componentDidMount() {
        // initially lock to portrait
        Orientation.lockToPortrait();
    }

    onFullScreenPressed = () => {
        const {fullscreen} = this.state;
        const newFullscreen = !fullscreen;
        this.setState({fullscreen: newFullscreen});
        if (newFullscreen) {
            Orientation.lockToLandscape();
        } else {
            Orientation.lockToPortrait();
        }
    }

    renderPlayer() {
        const {fullscreen} = this.state;
        return <PlayerView style={fullscreen ? styles.playerFullscreen : styles.player}/>;
    }

    render() {
        const {fullscreen} = this.state;
        return (
            <>
                <View style={styles.container}>
                    <View style={styles.box}>
                        <View style={styles.innerBox}>
                            <PortalOrigin destination={fullscreen ? 'fullscreen' : null}>
                                {/* Inline player lives here */}
                                {this.renderPlayer()}
                            </PortalOrigin>
                        </View>
                    </View>
                </View>

                <View style={{position: 'absolute', width: '100%', height: '100%'}}>
                    {/* Fullscreen player lives here */}
                    {fullscreen && <PortalDestination name="fullscreen"/>}
                </View>

                <TouchableHighlight style={styles.text} onPress={this.onFullScreenPressed}>
                    <Text style={styles.text}>Toggle fullscreen</Text>
                </TouchableHighlight>
            </>
        );
    }

}

export default () => (
    <BasicScreen/>
);

const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            backgroundColor: 'white',
        },
        box: {
            padding: 24,
            backgroundColor: 'white',
        },
        innerBox: {
            padding: 24,
            backgroundColor: 'white',
        },
        player: {
            backgroundColor: '#ff0000',
            width: 320,
            height: 160
        },
        playerFullscreen: {
            height: Dimensions.get('window').width,
            width: Dimensions.get('window').height,
            backgroundColor: '#00ff00',
        },
        text: {
            alignSelf: 'center',
            textAlign: 'center',
            margin: 12,
            color: 'black',
            backgroundColor: '#eee',
        }
    }
);
