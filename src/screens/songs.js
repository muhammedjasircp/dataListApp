import React, {useState, useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {FlatList, View} from 'react-native';
import {getData} from '../api';
import SongItem from '../components/songItem';

const SongsScreen = ({navigation}) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getSongs = async () => {
    setIsLoading(true);
    const data = await getData();
    setSongs(data);
    setIsLoading(false);
  };
  useEffect(() => {
    RNBootSplash.hide();
    getSongs();
  }, []);

  return (
    <View>
      <FlatList
        refreshing={isLoading}
        onRefresh={() => getSongs()}
        keyExtractor={(item, index) => index.toString()}
        data={songs.results}
        renderItem={({item}) => <SongItem item={item} />}
      />
    </View>
  );
};

export default SongsScreen;
