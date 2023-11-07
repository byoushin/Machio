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
    fetch('http://127.0.0.1:8000/get_location', {
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
