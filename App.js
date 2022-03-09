import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import uuid from 'react-native-uuid';

import Header from './components/header';
import ListItem from './components/list_item';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), title: 'Kurtis'},
    {id: uuid.v4(), title: 'Shirts'},
    {id: uuid.v4(), title: 'Pants'},
    {id: uuid.v4(), title: 'Skirts'},
    {id: uuid.v4(), title: 'Tops'},
    {id: uuid.v4(), title: 'Sarees'},
    {id: uuid.v4(), title: 'Pyjamas'},
  ]);

  function deleteItemFromShop(selItem) {
    let prevItems = items;
    let newItems = [];
    newItems = prevItems.filter(item => item.id != selItem.id);
    console.log(
      'old items length ' +
        prevItems.length +
        ' New items length ' +
        newItems.length,
    );
    console.log(newItems);
    setItems(newItems);
  }

  return (
    <View style={styles.mainContainer}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem
            item={item}
            deleteItemFromShop={selItem => deleteItemFromShop(selItem)}
          />
        )}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  list: {width: '100%', backgroundColor: 'white'},
  listContainer: {paddingHorizontal: 5, paddingVertical: 5, flexGrow: 1},
});

export default App;
