import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, ScrollView, FlatList, TouchableOpacity, View, SafeAreaView, Pressable } from 'react-native';
import { Feather, MaterialCommunityIcons, AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// import { TamaguiProvider, View, createTamagui } from '@tamagui/core'
// import { config } from '@tamagui/config/v3'
// import { Button } from 'tamagui'

// const tamaguiConfig = createTamagui(config)

const stories = [
  { id: '1', name: 'Bagas', hasStory : true, img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" },
  { id: '2', name: 'Pragos', hasStory : true, img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" },
  { id: '3', name: 'xxxTent', hasStory : false, img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" },
  { id: '4', name: 'billypramuda', hasStory : false, img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" },
  { id: '5', name: 'anonimus', hasStory : false, img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" },
  { id: '6', name: 'whad da hell', hasStory : false, img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" },
  { id: '7', name: 'oh my god', hasStory : false, img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" },
];

const FEEDS_DATA = [
  {
    id: '1',
    username: "Levi Ackerman",
    userImageUrl:
      "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
    hasActiveStory: false,
    feed: {
      imageUrl:
        "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
      totalLikes: 10,
      friendLikes: [
        {
          name: "Dova",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        },
        {
          name: "Alan Walker",
          imageUrl:
            "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        },
        {
          name: "Oki",
          imageUrl:
            "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        },
      ],
      caption:
        "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
      totalComments: 5,
      postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
    },
  },
  {
    id : '2',
    username: "Alan Walker",
    userImageUrl:
      "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
    hasActiveStory: false,
    feed: {
      imageUrl:
        "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
      totalLikes: 10,
      friendLikes: [
        {
          name: "Dova",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        },
        {
          name: "Levi",
          imageUrl:
            "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        },
        {
          name: "Oki",
          imageUrl:
            "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        },
      ],
      caption:
        "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
      totalComments: 5,
      postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
    },
  },
];

export default () => {
    // @ts-ignore
  useFonts({'StyleScript' : require('./assets/fonts/StyleScript_Regular.ttf')});

  return (
    <ScrollView>
    
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Text style={styles.navBarTitle}>Instagram</Text>
            <AntDesign style={styles.navBarIcon} name="down" size={24} color="black" />
            <View style={styles.navBarIconsContainer}>
              <FontAwesome6 style={styles.navBarIcons} name="heart" size={24} color="black" />
              <AntDesign style={styles.navBarIcons} name="message1" size={24} color="black" />
            </View>
        </View>

        <View style={styles.storiesContainer}>
          <ScrollView horizontal>
        <FlatList
          horizontal
          data={stories}
          renderItem={({ item }) => (
            <View style={styles.story}>

            {item.hasStory ? (
              <Image source={{ uri: item.img }} style={styles.hasStoryImage} />
            ) : (
              <Image source={{ uri: item.img }} style={styles.StoryImage} />
            )}
            <Text style={styles.storyName}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
        </ScrollView>
      </View>
      <View style={styles.suggestedContainer}>
        <Text style={styles.suggestedText}>Suggested for you</Text>
        <TouchableOpacity>
          <Text style={styles.olderPostsText}>Older posts</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.feedContainer}>
      {FEEDS_DATA.map((post) => (
        <View key={post.id} style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
              <Image source={{ uri: post.userImageUrl }} style={styles.profileImage} />
              <Text style={styles.postUser}>{post.username}</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>

          <Image source={{ uri: post.feed.imageUrl }} style={styles.postImage} />
          <Text style={styles.postDescription}>{post.feed.caption}</Text>
          <Text style={styles.likesText}>{post.feed.totalLikes} likes</Text>
          <Pressable>
          <Text style={styles.commentsText}>{post.feed.totalComments} comments</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>

      </View>
      </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  //container atas
  navBar: {
    height: 60,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  navBarTitle: {
    fontFamily: 'StyleScript',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  navBarIcon: {
    fontSize: 15,
    marginLeft: 10,
    alignItems: 'flex-start',
    flex :1,
  },
  navBarIconsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  navBarIcons: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },

  //story bar
  storiesContainer: {
    height: 100,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  story: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  hasStoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ff8501',
  },
  StoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
  
  },
  storyName: {
    fontSize: 12,
    marginTop: 5,
  },

  //suggested
  suggestedContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  suggestedText: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  //feed
  olderPostsText: {
    fontSize: 12,
    color: '#75c5f9',
  },
  feedContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  post: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUser: {
    fontWeight: 'bold',
  },
  followButton: {
    backgroundColor: '#ebeff6',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  followText: {
    color: '#fff',
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
  postDescription: {
    marginTop: 10,
  },
  likesText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  commentsText: {
    color: 'gray',
    marginTop: 5,
  },
  bottomNavBar: {
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
