import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import DeleteIcon from '../assets/icons/delete_icon';

export default function ListItem(props) {
  const rxdItem = props.item;
  const defaultProps = {id: 1, title: 'Cloth name'};
  const item = rxdItem ?? defaultProps;

  function onDeleteButtonClicked() {
    props.deleteItemFromShop(item);
  }

  return (
    <TouchableOpacity style={styles.listItemTouchable}>
      <View style={styles.listItemContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => onDeleteButtonClicked()}
          style={styles.deleteButtonContainer}>
          <DeleteIcon width={20} height={20} color={'#FF0000'} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItemTouchable: {
    backgroundColor: 'white',
    minHeight: 60,
    width: '100%',
    height: 100,
    shadowColor: 'grey',
    marginBottom: 3,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderRadius: 5,
  },
  deleteButtonContainer: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 3,
    padding: 5,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  itemTitle: {
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
  },
});
