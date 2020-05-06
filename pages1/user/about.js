import React, { Component } from 'react';

import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
import { NavigationActions } from 'react-navigation';
import {jobs} from '../../util/profile/jobsData';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class SavedLocation extends Component{
 constructor(props) {
   super(props);
   //this.back_Button_Press = this.back_Button_Press.bind(this);
   this.state = {

   }

 }
 render(){

  return(
   <View style={styles.MainContainerAbout}>
     <View style={styles.bottom}>
          <ScrollView vertical={true}
          style={styles.scrollContainerDown}
           ref={(scrollView) => { scrollView = scrollView; }}
          showsVerticalScrollIndicator={false}>


               <View style={styles.cardsDown}>
                   <View style={styles.top}>
                      <View style={styles.title}>
                            <View><Text style={styles.titleText}>A Proven Expertise</Text></View>
                            <View style={styles.editTitleIcon}>
                                   <TouchableOpacity
                                    onPress = {() => {alert("Sorry Editing your About Profile is temporaryly disabled by admin!")}}
                                    activeOpacity={0.6}
                                    style={styles.button} >
                                      <Image style={styles.editImageContainer} source={require('../../images/editt.png')} style={{width:18, height:18,backgroundColor:'#fff', marginLeft:wp('5%')}} />
                                   </TouchableOpacity>
                                     <Text style={{fontSize:8, padding:5, color:'rgb(255,165,0)',}}>Edit Profile</Text>
                               </View>

                        </View>
                      <View style={styles.message}><Text style={styles.messageText}>We are local company with good eyes for design, aesthetic and style. founder on a sure principle of professionalism and excellence,.</Text></View>

                     </View>

               </View>


               <View style={styles.galleryDown}  >

               {
               jobs && jobs.length > 0 && jobs.map(val => {
                return (

               <View style={styles.gallery} key={val.id}>
                     <Image source={val.img} style={{height:100, width:100, }}/>
                     </View>
                       )
                       })
                           }

               </View>





          </ScrollView>
     <View>

   </View>
     </View>

   </View>

  )
 }
 }
 export default SavedLocation ;




 const styles = StyleSheet.create({

  MainContainerAbout: {
  width:wp('100%'),
  height:hp('100%'),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  flexDirection:'column',
  },
  scrollContainerDown:{
   flex: 1,
   flexDirection: 'column',
  },

    bottom: {
    height:hp('65%'),
    width:wp('99%'),
    elevation: hp('1.5%'),
    top:hp('0%'),
    position:'absolute',

   },

  cardsDown:{
   width: wp('99%'),
   resizeMode: 'contain',
   height:hp('13%'),
   borderWidth: 0,
   borderRadius: 1.5,
   borderBottomWidth: 0,
   borderColor:'transparent',
   elevation: 2,
   flexDirection:'column',
   backgroundColor:'#fff',
   shadowOffset: {width: 0, height: 3},
   shadowOpacity: 0.10,
   shadowRadius: 3.65,
   elevation: 0.9,
  },
top:{
 height:hp('12%'),
 width:wp('95%'),
 borderStyle:'solid',
 borderWidth:1,
 borderColor:'transparent',
 alignItems:'center',
 padding:5,
 margin:5,
},
title:{
 width:wp('92%'),
 flexDirection:'row',
 paddingLeft:wp('3%'),
},
titleText:{
fontWeight:'bold',
width:wp('60%'),
},
editTitleIcon:{
 width:wp('25%'),
 flexDirection:'row',

},
message:{
 width:wp('93%'),
 paddingLeft:wp('3%'),
},
messageText:{
color:'gray',
flexWrap:'wrap',
fontSize:12,
},
galleryDown:{
 width: wp('100%'),
 height:'auto',
 borderWidth: 0,
 borderRadius: 1.5,
 borderBottomWidth: 0,
 elevation: 2,
 flexDirection:'column',
 backgroundColor:'#fff',
 shadowOffset: {width: 0, height: 3},
 shadowOpacity: 0.10,
 shadowRadius: 3.65,
 elevation: 0.9,
 flexDirection:'row',
 flexWrap:'wrap'
},
gallery:{
width:wp('32%'),
height:hp('18%'),
resizeMode: 'contain',
borderWidth: 0,
borderRadius: 1.5,
borderBottomWidth: 0,
elevation: 2,
flexDirection:'column',
backgroundColor:'white',
shadowOffset: {width: 0, height: 3},
shadowOpacity: 0.10,
shadowRadius: 3.65,
elevation: 0.9,
marginTop:2,
marginRight:2,
alignItems:'center',
justifyContent:'center',

},





 });
