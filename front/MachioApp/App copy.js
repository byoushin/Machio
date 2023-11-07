import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Platform,} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {permissions} from 'react-native-permissions';
const STATUSBAR_HEIGHT = Platform.OS == "ios" ? 20: StatusBar.currentHeight;

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <MapView
            style={styles.mapview}
            initialRegion={{
              latitude: 35.681262,
              longitude: 139.766403,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00521,
            }}
          >
            <Marker
              coordinate={{
                latitude: 35.681262,
                longitude: 139.766403
              }}
              title = "ずっと真夜中でいいのに。"
              />
            <Marker
              coordinate={{
                latitude: 35.681260,
                longitude: 139.766307
              }}
              title = "秒針を噛む"
              />
          </MapView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapview: {
    ...StyleSheet.absoluteFillObject,
  },
});
