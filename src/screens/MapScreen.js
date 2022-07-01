import * as React from 'react';
import MapView, { Marker, Callout, Polygon } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function MapScreen({navigation, route}) {

    const [pin, setPin] = useState({
        latitude:1.2944739859159593, 
        longitude: 103.77254620673452
    })
// API KEY: AIzaSyCXgZhTLkOeD2rG1gdTLyJQR9z1KZ50tq4
  return (
    <View style={styles.container}>
         <View style ={styles.view1}>
                <Icon 
                    name ="arrow-left"
                    type = "material-community"
                    color = 'white'
                    size = {25}
                    onPress ={()=> {navigation.navigate("HomeScreen",{
                        pin
                    })}}
                />
                <Text style ={styles.text1}>Maps</Text>
            </View>
            {/* <View style ={styles.view1}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                  // 'details' is provided when fetchDetails = true
                  console.log(data, details);
                }}
                query={{
                  key: 'AIzaSyCXgZhTLkOeD2rG1gdTLyJQR9z1KZ50tq4',
                  language: 'en',
                }}
              />
            </View> */}
            <View>
            
            <MapView 
                style={styles.map}
                initialRegion = {{
                    latitude:1.2929673162323339,   
                    longitude: 103.77141679094656,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.009
                }}
                provider = 'google'
            > 
              
                
              <Marker
                    title = "Current Location"
                    description = "Press and Hold to Drag me!"
                    coordinate={{
                        latitude:1.2929673162323339,
                        longitude: 103.77141679094656
                    }}
                    pinColor = 'blue'
                    draggable = {true}
                    onDragStart = {(e) => {
                        console.log("Drag Start", pin)
                     }}
                     onDragEnd = {(e) => {
                         setPin({
                             latitude: e.nativeEvent.coordinate.latitude,
                             longitude: e.nativeEvent.coordinate.longitude
                         })
                     }}
                />

              <Polygon 
                coordinates={coordinate}
                strokeColor = 'orange'
                strokeWidth={4}
                fillColor = 'rgba(229,188,85,0.2)'
              > 
              
              
              </Polygon>

              <Marker
                    title = "The Deck"
                    description = "Get your food from here!"
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
            </MapView>
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
    alignItems:"center",
    padding:10,
    backgroundColor:'orange',
    paddingTop:25,
    paddingBottom: 20
},
  map: {
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },

  text1:{fontWeight:"bold",
  marginLeft:40,
  color:'white',
  fontSize:18
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
