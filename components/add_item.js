import React, {useState} from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function AddItem(props) {
  function AddItem() {
    props.addItem(text);
  }

  // state values
  const [text, setText] = useState('');

  return (
    <View style={styles.addItemContainer}>
      <TextInput
        placeholder="Enter item title"
        style={styles.input}
        placeholderTextColor={'grey'}
        value={text}
        onChangeText={val => setText(val)}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => AddItem()}>
        <Text>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addItemContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '95%',
    padding: 5,
    borderWidth: 1,
    margin: 3,
    marginTop: 10,
  },
  input: {
    width: '100%',
    flex: 2.5,
    color: 'grey',
    fontSize: 16,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'green',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 5,
  },
});
