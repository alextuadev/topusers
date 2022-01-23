import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, useTheme } from 'react-native-elements';
import colors from '../constants/colors';
import { getUsers } from '../lib/api';
import { Button } from 'react-native-elements';


const Home = ({ navigation }) => {
  const { theme } = useTheme();
  const [userList, setUserList] = useState([])


  const getUserList = async () => {
    const res = await getUsers()
    const data = await res.json()
    console.log(data)
    const users = data.slice(0, 5);
    setUserList(users)
  }


  useEffect(() => {
    getUserList()

  }, []);


  return (
    <View style={styles.mainContainer}>
      <Text
        h1
        h1Style={{ color: theme?.colors?.black }}
        style={styles.title}
      >
        Top 5 GitHub Users
      </Text>
      <Text style={styles.instructions}>
        Tap the username to see more information
      </Text>

      <View style={styles.buttonContainer}>
        {userList.map((user, index) => {
          return <Button
            onPress={() => navigation.navigate('Person', { username: user.login })}
            title={`User # ${user.id}`}
            containerStyle={{
              width: 90,
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          />
        })}
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  instructions: {
    fontSize: 18, marginBottom: 20
  },
  title: {
    fontSize: 12
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  mainContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15
  }
})


export default Home;