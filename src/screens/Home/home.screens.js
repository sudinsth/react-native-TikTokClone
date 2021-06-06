/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

import {Post} from '../../components/Post/post.component';

const post1 = {
  id: 'p1',
  user: {
    id: 'u1',
    username: 'Ryan Mack',
    imageUri: 'https://deadline.com/wp-content/uploads/2018/03/ninadobrev.png',
  },
  videoUri: 'https://i.pinimg.com/236x/62/87/d5/6287d56df8acee01223cd5b89ff756d4.jpg',
  description: 'I get Overwhelmed',
  songName: 'Ryan Mack - Broke',
  songImage: 'https://deadline.com/wp-content/uploads/2018/03/ninadobrev.png',
  likes: 323,
  comments: 23,
  shares: 84,
};
export const HomeScreen = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Post post={post1} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
});
