import React, { Component, } from 'react';
import { Text, View,Platform, TouchableOpacity,TouchableHighlight,Input, CheckBox,Dimensions, Button,TextInput,ScrollView,Image,Alert, StyleSheet,BackHandler,
  Modal } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import MapView from 'react-native-maps';
import StarRating from './StarRating/star-rating';
import { Marker } from 'react-native-maps';
import HeaderLeft from './headerLeft';
import Tooltip from 'react-native-walkthrough-tooltip';
 import Info from './info'
import PulseAnim from './PulseAnim';
import PulseAnim1 from './PulseAnim1';
import HeaderRight from './headerRight';
import MyModalContents from './myModalContent';
import { NavigationActions } from 'react-navigation';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';
import RBSheet from "react-native-raw-bottom-sheet";
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {characters} from '../util/map/mapData';
import {data} from '../util/home/serviceData';
import {reqData} from '../util/home/serviceRequestData';
import Callout from './callout';
console.disableYellowBox = true;



export default class AddEntryModal extends Component {
 constructor(props) {
     super(props)
     this.state = {

     isModalVisible: false,

       }


}
render() {

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <View style={showHideClassname}>
      <View className="modal-main">
        
        <Text onClick={handleClose}>close</Text>
      </View>
    </View>
  );
};
}
}
