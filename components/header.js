import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header({title}) {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {title: 'Shopping List'};

const styles = StyleSheet.create({
  headerStyle: {
    height: 80,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
  },
});
