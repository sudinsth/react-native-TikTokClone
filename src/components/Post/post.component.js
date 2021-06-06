/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';


import Video from 'react-native-video';
export const Post = (props) => {
  const {post} = props;
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: post.videoUri}}
        style={styles.video}
      />

      <View style={styles.uiContainer}>

        <View style={styles.rightContainer}>
          <View style={styles.profilePictureContainer}>
            <Image 
              style={styles.profilePicture}
              source={{uri: post.user.imageUri }}
            />
          </View>

            <View style={styles.iconContainer} >
              <AntDesign name={'heart'} size={40} color='#fff' />
              <Text style={styles.statsLabel}>{post.likes}</Text>
            </View>
            
            <View style={styles.iconContainer} >
              <FontAwesome name={'commenting'} size={40} color='#fff' />
              <Text style={styles.statsLabel}>{post.comments}</Text>
            </View>

            <View style={styles.iconContainer} >
              <Fontisto name={'share-a'} size={30} color='#fff' />
              <Text style={styles.statsLabel}>{post.shares}</Text>
            </View>


        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>@{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>

            <View style={styles.songRow}>
              <Entypo name={'beamed-note'} size={24} color='#fff' />
              <Text style={styles.songName}>{post.songName}</Text>
            </View>
            </View>
            <Image 
              style={styles.songImage}
              source={{uri:  post.songImage}}
            />
          
        </View>
      </View>


      {/* <Video
        source={{uri: 'https://www.tiktok.com/@ryanmackmusic/video/6965541619411995910?lang=en&is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6968456535312221697'}}
        style={styles.video}
        onError={(e) => console.log(e.message)}
        resizeMode={'cover'}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: '#fff',
  },
  video: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'blue',
  },
  uiContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,

  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  songName: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#4c4c4c',
  },

  // Right Container
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
});
