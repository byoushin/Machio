import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

const YourComponent = () => {
  const [gameData, setGameData] = useState([]);

  const fetchDataFromAPI = () => {
    fetch('https://34be-114-142-110-43.ngrok-free.app/get_location', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setGameData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []); // コンポーネントがマウントされたときにデータを取得

  return (
    <View>
      {gameData &&
        gameData.length > 0 &&
        gameData.map((location, index) => (
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
  );
};

export default YourComponent;
