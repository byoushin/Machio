import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Platform,} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {permissions} from 'react-native-permissions';
const STATUSBAR_HEIGHT = Platform.OS == "ios" ? 20: StatusBar.currentHeight;


import {  StyleSheet,View, Text, Button } from 'react-native';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  fetchDataFromAPI = () => {
    fetch('https://3765-114-142-110-43.ngrok-free.app/get_location', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View>
          <Button title="Fetch Data" onPress={this.fetchDataFromAPI} />
          {this.state.data && <Text>{JSON.stringify(this.state.data)}</Text>}
      </View>
    );
  }
}




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









import React, { Component } from 'react';
import {  StyleSheet,View, Text, Button } from 'react-native';

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  fetchDataFromAPI = () => {
    fetch('https://3765-114-142-110-43.ngrok-free.app/get_location', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View>
        <View>
          <Text>ずっと真夜中でいいのに。</Text>
          <Text>ずっと真夜中でいいのに。</Text>
          <Text>ずっと真夜中でいいのに。</Text>
          <Text>ずっと真夜中でいいのに。</Text>
        </View>
          <Button title="Fetch Data" onPress={this.fetchDataFromAPI} />
          {this.state.data && <Text>{JSON.stringify(this.state.data)}</Text>}
      </View>
    );
  }
}

export default MyComponent;






import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  const fetchDataFromAPI = () => {
    fetch('https://3765-114-142-110-43.ngrok-free.app/get_location', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        // 取得したデータをstateにセット
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View>
      {/* データを取得するボタン */}
      <Text>ずっと真夜中でいいのに。</Text>
      <Text>ずっと真夜中でいいのに。</Text>
      <Text>ずっと真夜中でいいのに。</Text>
      <Text>ずっと真夜中でいいのに。</Text>
      <Button title="Fetch Data" onPress={fetchDataFromAPI} />

      {/* 取得したデータを表示 */}
      {data && (
        <View>
          {data.map((location, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: location[1],
                  longitude: location[2],
                }}
                title={location[0]}
              />
            ))}          
        </View>
      )}
    </View>
  );
}

export default App;