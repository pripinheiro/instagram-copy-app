import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView,
  SafeAreaView,
  TouchableOpacity
 } from 'react-native';
import { Ionicons, FontAwesome, Feather, Octicons } from '@expo/vector-icons';

function InstaHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.nameHeader}>
        <Text>Instagram</Text>
      </View>

      <View style={styles.iconsHeader}>
        <View style={styles.headerAdd}>
          <Octicons name="diff-added" size={24} color="black" />
        </View>
        <View style={styles.headerHistoric}>
          <Ionicons name="ios-heart-outline" size={24} color="black" />
        </View>
        <View style={styles.headerSend}>
          <Feather name="send" size={24} color="black" />
        </View>
      </View>
    </View>
  )
}

function InstaStories({githubUser}) {
  return (
    <View style={styles.stories}>
      <View style={styles.profileStories}>
        <Image
          style={styles.profileImg} 
          source={{ 
            uri: `https://github.com/${githubUser}.png`
          }}/>
          <Text>{githubUser}</Text>
      </View>
    </View>
  )
}

function InstaCards({ githubUser }) {
  const [liked, setLike] = useState(false);
  return (
    <View>
      <View style={styles.cards}>
        <Image
        style={styles.profileImg} 
        source={{ 
          uri: `https://github.com/${githubUser}.png`
        }}/>
        <Text>{githubUser}</Text>
      </View>
      
      <View>
        <Image
        style={styles.profileContent} 
        source={{ 
          uri: `https://github.com/${githubUser}.png`
        }}/>
      </View>
      
      <View style={styles.interactions}>
        <View style={styles.likes}>
          <TouchableOpacity onPress={() => setLike(!liked)}>
            { liked && <Ionicons name="ios-heart" size={24} color="red" />}
            { !liked && <Ionicons name="ios-heart-outline" size={24} color="black" />}
          </TouchableOpacity>
        </View>
        <View style={styles.comment}>
          <FontAwesome name="comment-o" size={24} color="black" />
        </View>
        <View style={styles.send}>
          <Feather name="send" size={24} color="black" />
        </View>
      </View>

    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <InstaHeader />
      <View>
      {
        [
          'pripinheiro', 
          'vweberfroes', 
          'omariosouto', 
          'peas'
        ].map((githubUser) => 
          <InstaStories key={githubUser} githubUser={githubUser}/>
          )} 
      </View>
      <ScrollView>
      {
      [
        'pripinheiro', 
        'vweberfroes', 
        'omariosouto', 
        'peas'
      ].map((githubUser) => 
        <InstaCards key={githubUser} githubUser={githubUser}/>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  cards: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
   },

  profileImg: {
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  profileContent: {
    width: '100%',
    height: 350,
  },

  interactions: {
    flexDirection: 'row',
  },

  likes: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },

  comment: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },

  send: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  nameHeader: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },

  iconsHeader: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },

  headerAdd: {
    marginRight: 10
  },

  headerHistoric: {
    marginRight: 10
  },

  stories: {
   flexDirection: 'row' 
  },

  profileStories: {
    
  }






});
