/* eslint-disable prettier/prettier */
import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';

import {Post} from '../../components/Post/post.component';

import posts from '../../assets/data/posts';

export const HomeScreen = () => {
  return (
      <View>
        <FlatList 
          data={posts}
          renderItem={({item}) => <Post post={item} /> }
          showsVerticalScrollIndicator={false}
          snapToInterval={Dimensions.get('window').height - 55}
          snapToAlignment={'start'}
          decelerationRate={'normal'}
        />
      </View>
  );
};