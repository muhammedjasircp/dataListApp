import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {msToTime} from '../utils/utilMethods';

const DetailScreen = ({route}) => {
  const {item} = route.params;

  const list = [
    {type: 'Collection name', value: item.collectionName},
    {type: 'Genre', value: item.primaryGenreName},
    {type: 'Track count', value: item.trackCount},
    {
      type: 'Release date',
      value: new Date(item.releaseDate).toISOString().substring(0, 10),
    },
    {
      type: 'Track price',
      value: `${item.trackPrice} ${item.currency}`,
    },
    {
      type: 'Collection price',
      value: `${item.collectionPrice} ${item.currency}`,
    },
  ];

  const loadInBrowser = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <Image source={{uri: item.artworkUrl100}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.trackName}>{item.trackName}</Text>
          <View style={styles.artistDuration}>
            <Text style={styles.artistName}>{item.artistName}</Text>
            <Text style={styles.duration}>
              {msToTime(item.trackTimeMillis)}
            </Text>
          </View>
        </View>
      </View>

      {list.map((types, index) => (
        <View key={index} style={styles.types}>
          <Text style={styles.type}>{types.type}</Text>
          <Text style={styles.value}>{types.value}</Text>
        </View>
      ))}
      <View style={styles.types}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => loadInBrowser(item.trackViewUrl)}>
          <Text>View Track</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => loadInBrowser(item.collectionViewUrl)}>
          <Text>View Collection</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;

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
  types: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  type: {
    fontWeight: 'bold',
  },
  value: {
    fontSize: 12,
    maxWidth: '50%',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    margin: 4,
    padding: 16,
    backgroundColor: '#D0AF0F',
  },
});
