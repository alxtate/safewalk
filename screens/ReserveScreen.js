import React from 'react';
import { StyleSheet, Text, Image, View, Button, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';


const latitude = 37.713772;
const longitude = -89.223740;


export default class ReserveScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      textInputValue: '',

      hasMarker: true,
      input: {
        Name: 'ExampleName',
        Dawg: '855580836',
        Email: 'testemail@test.com',
        Phone: '6182018435',
        Time: '20:00',
        Start: 'Start',
        End: 'End',
      }
    };
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  _handleSubmitPress = () => {
    const jsonInput = JSON.stringify(this.state.input);
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.open('POST', 'https://police.siu.edu/sw/safewalkwriteandemail.php', true);
    xmlhttp.setRequestHeader('Content-type', 'application/json');
    xmlhttp.send(jsonInput);
  }
    render() {
        return (
          <>
            <MapView
            style={styles.map}
                initialRegion={{
                  latitude: 37.713772,
                  longitude: -89.223740,
                  latitudeDelta: 0.0182,
                  longitudeDelta: 0.0421,
                }}
            >
              <Marker
                coordinate={{
                  latitude: 37.704412,
                  longitude: -89.221004,
                }}
                title={"Abe Martin Field"}
                description={"425 Saluki Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71428637279853,
                  longitude: -89.21724158737811,
                }}
                title={"Student Services Building"}
                description={"1263 Lincoln Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.716411347309425,
                  longitude: -89.21790980973509,
                }}
                title={"Altgeld Hall"}
                description={"1000 S Normal Ave"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71521675439626,
                  longitude: -89.22053396697028,
                }}
                title={"Morris Library"}
                description={"605 Agriculture Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.714920359551236,
                  longitude: -89.22505351888134,
                }}
                title={"Communications Building"}
                description={"1100 Lincoln Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.716681296329,
                  longitude: -89.22287196107274,
                }}
                title={"College of Business"}
                description={"1025 Lincoln Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71600561669281,
                  longitude: -89.22292250555333,
                }}
                title={"Lawson Hall"}
                description={"1075 Lincoln Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71107664804962,
                  longitude: -89.22413926879767,
                }}
                title={"Lentz Hall"}
                description={"1275 Point Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71157464825591,
                  longitude: -89.22321783979942,
                }}
                title={"Bailey Hall"}
                description={"1225 Point Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.7118420066122,
                  longitude: -89.22489690258385,
                }}
                title={"Baldwin Hall"}
                description={"800 Lentz Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71258327200051,
                  longitude: -89.2252799288619,
                }}
                title={"Abbott Hall"}
                description={"850 Lentz Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.712786970925606,
                  longitude: -89.2226728215986,
                }}
                title={"Agriculture Building"}
                description={"1205 Lincoln Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71507150896465,
                  longitude: -89.21879722000152,
                }}
                title={"Faner Hall"}
                description={"1000 Faner Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.70920755894881,
                  longitude: -89.22064103866013,
                }}
                title={"College of Applied Sciences and Arts"}
                description={"1365 Douglas Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.708591832996326,
                  longitude: -89.21834641214389,
                }}
                title={"SIU Arena"}
                description={"1400 Arena Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71327444560985,
                  longitude:-89.21267820601041,
                }}
                title={"Department of Public Safety"}
                description={"1175 South Washington St., Trueblood Hall"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.718445447492925,
                  longitude: -89.21276915834298,
                }}
                title={"Student Recreation Center"}
                description={"300 E Grand Ave"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71434900889387,
                  longitude: -89.2128820932354,
                }}
                title={"Neely Hall"}
                description={"275 Neely Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.715424544613626,
                  longitude: -89.21173652704994,
                }}
                title={"Mae Smith Hall"}
                description={"330 Neely Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71526940452319,
                  longitude: -89.21283810369049,
                }}
                title={"Grinnel Hall"}
                description={"275 E Park St"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71543989793939,
                  longitude: -89.21064718130687,
                }}
                title={"Schneider Hall"}
                description={"370 Neely Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.716103876853616,
                  longitude: -89.21618411484724,
                }}
                title={"Davies Hall"}
                description={"1075 S Normal Ave"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71762891368248,
                  longitude: -89.21818732569393,
                }}
                title={"Woody Hall"}
                description={"900 S Normal Ave"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71798417484281,
                  longitude: -89.21992800178158,
                }}
                title={"Pulliam Hall"}
                description={"475 Clocktower Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.71733430021425,
                  longitude: -89.22125011357427,
                }}
                title={"Wham Hall"}
                description={"625 Wham Dr"}
              ></Marker>
              <Marker
                coordinate={{
                  latitude: 37.714643555719114,
                  longitude: -89.22301946443056,
                }}
                title={"Life Science Building III"}
                description={"1135 Lincoln Dr"}
              ></Marker>
            </MapView>
            <View style={styles.reservation}>
              <Text style={styles.reserveHeader}>In order to reserve an escort,</Text>
              <Text style={styles.reserveHeader}>all fields must be filled out</Text>
              <TextInput
                placeholder='Enter your name'
                onChangeText={(Name) => this.setState({this.state.Name})}
                value={this.state.Name}
                style={styles.reserveField}
              />
              <TextInput
                placeholder='Enter your Dawgtag'
                style={styles.reserveField}
                onChangeText={() => this.setState({Dawg})}
                value={this.state.Dawg} 
              />
              <TextInput
                placeholder='Enter your email'
                style={styles.reserveField}
                onChangeText={(Email) => this.setState({Email})}
                value={this.state.Email}
              />
              <TextInput
                placeholder='Enter your phone number'
                style={styles.reserveField}
                onChangeText={(Phone) => this.setState({Phone})}
                value={this.state.Phone}
              />
              <TextInput
                placeholder='Enter the starting time'
                style={styles.reserveField}
                onChangeText={(Time) => this.setState({Time})}
                value={this.state.Time}
              />
              <TextInput
                style={styles.reserveField}
                placeholder='Enter the starting location'
                onChangeText={(Start) => this.setState({Start})}
                value={this.state.Start}
              />
              <TextInput
                style={styles.reserveField}
                placeholder='Enter the endng location'
                onChangeText={(End) => this.setState({End})}
                value={this.state.End}
              />
              <Button
                title='Submit'
                style={styles.submitButton}
                onPress={this._handleSubmitPress}
              />
            </View>
          </>
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
    map: {
      flex: 1,
      height: '40%',
    },
    singleTab: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    reservation: {
      height: '60%',
    },
    reserveHeader: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: 'center',
    },
    reserveField: {
      fontSize: 15,
      borderWidth: 2,
      flex: 1
    },
    submitButton: {
      color: '#660000',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  