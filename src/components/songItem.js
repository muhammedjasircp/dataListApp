import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {msToTime} from '../utils/utilMethods';

const SongItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {
          item,
        })
      }
      style={styles.container}>
      <Image source={{uri: item.artworkUrl100}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.trackName}>{item.trackName}</Text>
        <View style={styles.artistDuration}>
          <Text style={styles.artistName}>{item.artistName}</Text>
          <Text style={styles.duration}>{msToTime(item.trackTimeMillis)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(SongItem);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  content: {
    paddingLeft: 16,
    justifyContent: 'center',
  },
  image: {height: 100, width: 100},
  artistDuration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trackName: {
    fontSize: 20,
    marginBottom: 16,
  },
  artistName: {
    fontWeight: 'bold',
    maxWidth: '80%',
    fontSize: 12,
  },
  duration: {
    fontSize: 12,
    paddingLeft: 16,
  },
});
