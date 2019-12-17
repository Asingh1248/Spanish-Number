import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,ScrollView } from 'react-native';
import {Audio} from 'expo-av'


const listBackgroundColors={
  1:"#2B2B52",
  2:"#74B9FF",
  3:"#487EB0",
  4:"#2ecc72",
  5:"#badc57",
  6:"#1BCA9B",
  7:"#FFF222",
  8:"#DAE0E2",
  9:"#E74292",
  10:"#EA7773"
}

const soundList={
  one:require('./assets/one.wav'),
  two:require('./assets/two.wav'),
  three:require('./assets/three.wav'),
  four:require('./assets/four.wav'),
  five:require('./assets/five.wav'),
  six:require('./assets/six.wav'),
  seven:require('./assets/seven.wav'),
  eight:require('./assets/eight.wav'),
  nine:require('./assets/nine.wav'),
  ten:require('./assets/ten.wav')
}

export default class App extends React.Component{
   
  playSound = async number =>{

    //Play Sound--Refer expo --audio Doc example
    const soundObject =new Audio.Sound();
    try {
      //await & Async:based on no we can select
      let path =soundList[number]
      await soundObject.loadAsync(path)
      //loading the file
      await soundObject
      .playAsync()
      // playBbackStatus --Duration
      .then(async playbackStatus  => {
        // Duration of the sound
        setTimeout(()=>{
          soundObject.unloadAsync();
        },playbackStatus.playableDurationMillis);
      })
      //unloading the sound of the System
      .catch(error =>{
        console.log(error)
      })

      //if successful 
      //handling crashing part
    } catch (error) {
      console.log(error)
    }

  };
  
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <ScrollView style={styles.Container}>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.item, {backgroundColor: listBackgroundColors[1]}]}
              onPress={()=>{this.playSound("one")}} >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.item, {backgroundColor: listBackgroundColors[2]}]}
            onPress={()=>{this.playSound("two")}} >
            <Text style={styles.itemText}>Two</Text>
          </TouchableOpacity>
          </View>
          
          <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.item, {backgroundColor: listBackgroundColors[3]}]}
            onPress={()=>{this.playSound("three")}} >
            <Text style={styles.itemText}>Three</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.item, {backgroundColor: listBackgroundColors[4]}]}
            onPress={()=>{this.playSound("four")}} >
            <Text style={styles.itemText}>Four</Text>
          </TouchableOpacity>
          </View>
      
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.item, {backgroundColor: listBackgroundColors[5]}]}
              onPress={()=>{this.playSound("five")}} >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
          <TouchableOpacity
            style={[styles.item, {backgroundColor: listBackgroundColors[6]}]}
            onPress={()=>{this.playSound("six")}} >
            <Text style={styles.itemText}>Six</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.item, {backgroundColor: listBackgroundColors[7]}]}
              onPress={()=>{this.playSound("seven")}} >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item, {backgroundColor: listBackgroundColors[8]}]}
              onPress={()=>{this.playSound("eight")}} >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[styles.item, {backgroundColor: listBackgroundColors[9]}]}
              onPress={()=>{this.playSound("nine")}} >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.item, {backgroundColor: listBackgroundColors[10]}]}
              onPress={()=>{this.playSound("ten")}} >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 20,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
  },
  logo: {
    alignSelf: "center",
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: "row",
    // flexWrap:"wrap",
    width: "100%",
    marginTop: 10,
  },
  item:{
    flex: 1,
    height: 110,
    //width:"50%",
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    borderRadius: 10,
  },
  itemText: {
    color: "black",
    fontSize: 20,
  }
});