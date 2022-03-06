import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/header';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
