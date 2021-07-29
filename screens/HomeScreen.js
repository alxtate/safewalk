import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.screenFormat}>
                <Image
                source={
                    __DEV__
                        ? require('../assets/police.png')
                        : require('../assets/police.png')
                }
                style={styles.welcomeImage}/>
                <Text>SIU Department of Public Safety</Text>
                <Text>Escorts are available for request 24/7</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcomeImage: {
      width: 150,
      height: 100,
      resizeMode: 'contain',
      marginTop: 3,
      marginLeft: -10,
    },
    screenFormat: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    singleTab: {
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  