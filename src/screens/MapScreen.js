import * as React from 'react';
import MapView, { Marker, Callout, Polygon } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Modal, Pressable, Alert } from 'react-native';
import {  Icon } from 'react-native-elements';
import { useState } from 'react';
import * as geolib from 'geolib';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Button } from '@react-native-material/core'

export default function MapScreen({navigation, route}) {

    const [pin, setPin] = useState({
        latitude:1.2929673162323339, 
        longitude: 103.77141679094656
    })
    const [modalVisible, setModalVisible] = useState(true);
    const [location, setLocation] = useState("");

   
  return (
    <View style={styles.container}>
         <View style ={styles.view1}>
                <Icon 
                    name ="arrow-left"
                    type = "material-community"
                    color = 'white'
                    size = {26}
                    onPress ={()=> {navigation.navigate("HomeScreen",{
                        location,
                        pin
                    })}}
                />
                <Text style ={styles.text1}>Maps</Text>
                
                <Icon 
                    name ='information-outline'
                    type = "material-community"
                    color = 'white'
                    size = {30}
                    onPress = {() => {setModalVisible(true)}}
                    style = {{paddingRight: 5}}
                />
                
            </View>
            <View style ={styles.view2}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                fetchDetails={true}
                GooglePlacesSearchQuery={{
                  rankby: "distance"
                }}
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  
                  setPin({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    latitudeDelta: 0.004,
                    longitudeDelta: 0.005
                  })
                  setLocation(details.name)
                  
                }}               
                query={{
                  key: 'AIzaSyCAL3NHSLl9gNl4AI--5_w1Fib6qiVereI',
                  language: 'en',
                  components: "country:sg",
                  types: 'establishment',
                  radius: 3000,
                  location: `${pin.latitude},${pin.longitude}`,
                  strictbounds: true,
                }}
              />
            </View>
            <View>
            
            <MapView 
                style={styles.map}
                region = {{
                    latitude: pin.latitude,
                    longitude: pin.longitude,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.009
                }}
                provider = 'google'
            > 
            <View style = {{position: 'absolute', width: '100%'}}> 

            <Button
                title = "Set location"
                
                contentContainerStyle = {{height: 70}}
                color = 'orange'
                tintColor = 'white'
                variant = "contained"
                onPress={() => {
                  if (location == "") {
                    Alert.alert("Location is not filled in!")
                  } else {
                  navigation.navigate("HomeScreen", {
                  location,
                  pin
                  })                  
                }}
              }
               />                    
              <Polygon 
                coordinates={coordinate}
                strokeColor = 'orange'
                strokeWidth={4}
                fillColor = 'rgba(229,188,85,0.2)'
              >              
              </Polygon>
              <Marker
                    title = "Current Location"
                    description = "Type your location in the Search Bar!"
                    coordinate={{
                        latitude:pin.latitude,
                        longitude: pin.longitude
                    }}
                    pinColor = 'blue'
                    draggable = {false}
                    // onDragStart = {(e) => {
                    //     console.log("Drag Start", pin)
                    //  }}
                    //  onDragEnd = {(e) => {
                    //      setPin({
                    //          latitude: e.nativeEvent.coordinate.latitude,
                    //          longitude: e.nativeEvent.coordinate.longitude
                    //      })                        
                    //  }}
                     tracksViewChanges = {true}
                />

            

              <Marker
                    title = "The Deck"
                    description = 'Get your food from here!'
                    coordinate={{
                        latitude:1.2944739859159593,
                        longitude: 103.77254620673452
                    }}      
                    pinColor = 'red'                             
                />

              <Marker
                    title = "Science Canteen (Frontier)"
                    description = "Get your food from here!"
                    coordinate={{
                        latitude:1.2965688314100976, 
                        longitude: 103.78034874758642
                    }}      
                    pinColor = 'red'            
                />

              <Marker
                    title = "Supper Stretch"
                    description = "Get your food from here!"
                    coordinate={{
                        latitude:1.2930616477860788, 
                        longitude:  103.76873715064347
                    }}      
                    pinColor = 'red'            
                />
              </View>                   
            </MapView>
         
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{fontSize: 26,fontWeight: 'bold', textAlign: 'center'}}>Welcome to Maps! </Text>
                            <Text style={styles.modalText}> The Blue location marker is your current location and The Red location markers are the Canteen Locations.   </Text> 
                            <Text style={styles.modalText}>  Enter your location in the search bar to start! </Text>
                            <Text style={styles.modalText}>  </Text>
                            
                            <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{color: 'white'}}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1:{
    flexDirection:"row",
    alignItems: 'center',
    padding:15,
    backgroundColor:'orange',
    paddingTop:25,
    paddingBottom: 20,
    justifyContent: 'space-between'
},
view2:{
  flexDirection:"row",
  alignItems: 'center',
  padding:10,
  backgroundColor:'grey',
  paddingTop:10,
  paddingBottom: 10,
  justifyContent: 'space-between'
},
  map: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },

  text1:{fontWeight:"bold",
  
  color:'white',
  fontSize:22
},
modalView: {
  margin: 30,
  height: '50%',
  width: '70%',
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  justifyContent: 'space-between'
}, 
modal2View: {
  margin: 30,
  height: 100,
  width: 250,
  backgroundColor: "orangee",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  justifyContent: 'space-between'
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
  fontSize: 16
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
bottomView: {
  flex: 1,
  justifyContent: "flex-end",
  alignItems: "center",
},
button: {
  borderRadius: 15,
  padding: 15,
  elevation: 2,
  width: "70%",
  alignItems: 'center'
},
buttonClose: {
  backgroundColor: "orange",
},
});


  const coordinate =  [
    
      {
        longitude: 103.7710994,
        latitude:  1.3025026
      },
      { longitude: 103.769989,
        latitude:  1.3002877
      },
      {
        longitude: 103.7699032,
        latitude:  1.2977939
      },
      {
        longitude: 103.7696993,
        latitude: 1.2948335
      },
      {
        longitude: 103.7691253,
        latitude: 1.2935571
      },
      {
        longitude: 103.7681812,
        latitude: 1.2924147
      },
      {
        longitude:103.7685674,
        latitude: 1.2921519
      },
      {
        longitude:103.7694901,
        latitude: 1.2931977
      },
      {
        longitude:103.7705147,
        latitude: 1.2924147
      },
      {
        longitude:103.7727731,
        latitude: 1.2923557
      },
      {
        longitude:103.7734705,
        latitude: 1.2922109
      },
      {
        longitude:103.7733901,
        latitude: 1.2918838
      },
      {
        longitude:103.7737012,
        latitude: 1.2916478
      },
      {
        longitude:103.7765175,
        latitude: 1.2906556
      },
      {
        longitude:103.7781805,
        latitude: 1.2900121
      },
      {
        longitude:103.7793607,
        latitude: 1.2908863
      },
      {
       longitude:103.7802726,
        latitude: 1.2895991
      },
      {
        longitude:103.7817746,
        latitude: 1.289937
      },
      {
        longitude:103.7834376,
        latitude: 1.2915298
      },
      {
        longitude:103.7852025,
        latitude: 1.2932514
      },
      {
        longitude:103.7854922,
        latitude: 1.2938735
      },
      {
        longitude:103.7840652,
        latitude: 1.296008
      },
      {
        longitude:103.7823915,
        latitude: 1.2975847
      },
      {
        longitude:103.7757772,
        latitude: 1.3013442
      },
      {
        longitude:103.7727356,
        latitude: 1.3027386
      },
      {
        longitude:103.7710887,
        latitude: 1.302508
      },
      {
        longitude:103.7710994,
        latitude: 1.3025026
      }
    ]
