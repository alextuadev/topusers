import React, { useState, useEffect } from 'react';
import { View, Text, RefreshControl, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import colors from '../constants/colors';
import { getUserDetail } from '../lib/api';


const Person = ({ route, navigation }) => {
  const { username } = route.params;
  const [user, setUser] = useState({})


  const getDetails = async () => {
    const res = await getUserDetail(username)
    const data = await res.json()
    console.log(data)
    setUser(data)
  }


  useEffect(() => {
    getDetails()

  }, []);


  return (
    <>
      {user &&
        <>
          <Avatar
            size={64}
            rounded
            source={{ uri: user.avatar_url }}
            key={user.id}
          />
          <View>
            <Text>{user.name}</Text>
            <Text>{user.location}</Text>
          </View>
        </>
      }
    </>
  )
}



const styles = StyleSheet.create({

})


export default Person;