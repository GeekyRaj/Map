// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import style from './style';
// import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';


// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

//     componentDidMount(){
//         console.log('Did Mount');
//         // check(PERMISSIONS.IOS.LOCATION_ALWAYS)
//         //     .then(result => {
//         //         switch (result) {
//         //             case RESULTS.UNAVAILABLE:
//         //                 console.log(
//         //                     'This feature is not available (on this device / in this context)',
//         //                 );
//         //                 break;
//         //             case RESULTS.DENIED:
//         //                 console.log(
//         //                     'The permission has not been requested / is denied but requestable',
//         //                 );
//         //                 break;
//         //             case RESULTS.GRANTED:
//         //                 console.log('The permission is granted');
//         //                 break;
//         //             case RESULTS.BLOCKED:
//         //                 console.log('The permission is denied and not requestable anymore');
//         //                 break;
//         //         }
//         //     })
//         //     .catch(error => {
//         //         console.log('Error occurred');
//         //     });
//     }

//     render() {
//         console.log('jbdfjhf')
//         return (
//             <View style={style.main}>
//                 <Text> App </Text>
//             </View>
//         );
//     }
// }

// export default App;
import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
 
export default class App extends React.Component {
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
        >
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});