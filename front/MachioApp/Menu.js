import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const MenuItem = ({ onPress, imageSource }) => {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <Image source={imageSource} style={styles.imageButton} />
    </TouchableOpacity>
  );
};

const Menu = () => {
  const handlePress1 = () => {
    alert('ボタン 1 がクリックされました！');
  };

  const handlePress2 = () => {
    alert('ボタン 2 がクリックされました！');
  };

  const handlePress3 = () => {
    alert('ボタン 3 がクリックされました！');
  };

  const handlePress4 = () => {
    alert('ボタン 4 がクリックされました！');
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <MenuItem onPress={handlePress1} imageSource={require('./assets/button1.png')} />
        <MenuItem onPress={handlePress2} imageSource={require('./assets/button2.png')} />
        <MenuItem onPress={handlePress3} imageSource={require('./assets/button3.png')} />
        <MenuItem onPress={handlePress4} imageSource={require('./assets/button4.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  imageButton: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Menu;