import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Table, Rows } from 'react-native-table-component';
import Menu from './Menu';
import YourComponent from './function/function';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      message: '位置情報取得中',
      gameData: null,
    };
  }

  componentDidMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        message: 'Androidエミュレータでは動作しません。',
      });
    } else {
      this.getLocationAsync();
      this.fetchDataFromAPI();
    }
  }

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        message: '位置情報の取得に失敗しました',
      });
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    this.setState({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      message: '位置情報を取得しました',
    });
  };

  fetchDataFromAPI = () => {
    fetch('https://3765-114-142-110-43.ngrok-free.app/get_location', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        // 取得したデータをstateにセット
        this.setState({ gameData: data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const tableData = [['￥', '2,000,000'], ['確保', '4人']];

    if (this.state.latitude !== null && this.state.longitude !== null) {
      return (
        <View style={styles.container}>
           <View style={styles.header}>
            <Text style={styles.text}>
              まちなか鬼ごっこ
            </Text>
          </View>
          <View style={styles.timer}>
            <Text style={styles.timertext}>
              🔔1:19:58
            </Text>
          </View>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.02922,
              longitudeDelta: 0.02521,
            }}
            showsUserLocation={true}
          >
            <YourComponent/>
          </MapView>
          <View style={styles.middole}>
          </View>
            <Table style={styles.textbox}>
              <Rows  data={tableData} textStyle={styles.tableText}/>
          </Table>
          <View style={styles.middole}>
          </View>
            <Menu/>
          </View>
      );
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>{this.state.message}</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  map: {
    flex: 5,
    width: '80%',
    alignSelf: 'center', 
  },

  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  timertext:{
    color: '#fff',
    fontSize: 30,
  },
  textbox: {
    flex: 3,
    backgroundColor: '#ddd',
    width: '80%',
    height: '80%',
    alignSelf: 'center', 
    marginTop: 20,
    fontSize: 30,
  },
  timer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middole: {
    flex: 1,
  },
  tableText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    paddingTop: 30,
  },
  fotter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    width: '25%',
    height: 100,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
