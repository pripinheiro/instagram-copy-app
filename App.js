import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text,
  TextInput, 
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
        <Text style={styles.logoHeader}>Instagram</Text>
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

function InstaStories() {
  return (
    <View style={styles.stories}>
      <View style={styles.profileStories}>
        <Image
          style={styles.imageStories}
          source={{ 
            uri: `https://github.com/pripinheiro.png`
          }}/>
          <Text>Your Story</Text>
      </View>
      <View style={styles.profileStories}>
        <Image
          style={styles.imageStories}
          source={{ 
            uri: `https://github.com/vweberfroes.png`
          }}/>
          <Text>vweberfroes</Text>
      </View>
      <View style={styles.profileStories}>
        <Image
          style={styles.imageStories}
          source={{ 
            uri: `https://github.com/omariosouto.png`
          }}/>
          <Text>omariosouto</Text>
      </View>
    </View>
  )
}

function InstaCards({ githubUser }) {
  const [liked, setLike] = useState(false);
  const [comment, setComment] = useState('');
  return (
    <View>
      <View style={styles.cards}>
        <Image
        style={styles.profileImg} 
        source={{ 
          uri: `https://github.com/${githubUser}.png`
        }}/>
        <Text style={styles.profileName}>{githubUser}</Text>
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
      <View style={styles.addComment}>
        <Image 
          style={styles.imageComment}
          source={{ 
            uri: `https://github.com/pripinheiro.png`
          }}
        />
        <TextInput 
         placeholder='Add comment...'
         onChangeText={comment => setComment(comment)}
         defaultValue={comment}
        />
      </View>

    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <InstaHeader />
      <ScrollView>
      <View>
        <InstaStories /> 
      </View>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: 50,
  },

  logoHeader: {
    fontSize: 25,
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
    marginLeft: 10,
    alignItems: 'center'
  },

  imageStories: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5
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

  profileName: {
    fontSize: 18,
    fontWeight: '600'
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

  addComment: {
    flexDirection: 'row',
  },

  imageComment: {
    marginLeft: 15,
    marginRight: 15,
    width: 20,
    height: 20,
    borderRadius: 10,
  }
});
