import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header({title}) {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

Header.defaultProps = {title: 'Hey There'};

const styles = StyleSheet.create({
  headerStyle: {
    minHeight: 100,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'grey',
    fontSize: 20,
  },
});
