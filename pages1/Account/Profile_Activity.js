import React, {Component} from 'react';
import styled from 'styled-components/native';
import HeaderLeft from '../headerLeft';
import ProfileTab from './profileTab';
import Filterbutton from './filter';
import HeaderRight from '../headerRight';
import StarRating from '../StarRating/star-rating';
import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountHeaderRight from '../header/accountHeader/accountHeaderRight';
import { NavigationActions } from 'react-navigation';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;
type Props = {};
export default class Profile_Activity extends Component<Props> {

 static navigationOptions = {
 headerShown:'false',
  //headerRight:<AccountHeaderRight/>,
 };
 constructor(props) {
   super(props);
   this.state = {

   }

 }
    render() {
     const ratingObj = {
       ratings: 3,
       views: 34000
     }
      return (

        <View style={styles.MainContainer}>

                     <View style={styles.up}>
                     <View style={{height:hp('4%')}}></View>
                       <View style={{flexDirection:'column'}}>
                                 <View style={{height:hp('1%'),flexDirection:'row', width:wp('57%'),left:wp('18%')}}>
                                                     <View style={{ width:wp('45%'),justifyContent:'center', alignItems:'center'}}>
                                                          <Text style={{fontSize:12,fontWeight:'bold', alignItems:'center', justifyContent:'center'}}>DaregoBespoke Fashion Line</Text>
                                                     </View>
                                                      <View style={{ width:wp('15%'),justifyContent:'center',marginBottom:50, flexDirection:'row' }}>
                                                          <View style={styles.online}>
                                                          </View>

                                                          <View><Text style={{fontSize:8, padding:3}}>online</Text></View>
                                                       </View>
                                 </View>
                                                      <View style={{ width:wp('50%'),justifyContent:'center', alignItems:'center', marginLeft:wp('18%'), paddingTop:15}}>
                                                           <Text style={{fontSize:7, alignItems:'center', justifyContent:'center'}}>Designer of all kinds of Fabrics Bespoke </Text>
                                                      </View>
                        </View>

                     </View>
                     <View style={styles.middle}>
                     <View style={{height:hp('7%'), width:wp('45%'), justifyContent:'center', alignItems: 'center', left:wp('20%'), flexDirection:'column'}}>
                           <StarRating ratingObj={ratingObj}/>
                                <View style={{ width:wp('19%'),flexDirection:'row',paddingTop:5}}>
                                    <TouchableOpacity
                                        onPress = {() => {alert("Sorry Editing Title: DaregoBespoke fashion Line is disabled by admin!")}}
                                        activeOpacity={0.6}
                                        style={styles.button} >
                                          <Image style={styles.userImageContainer} source={require('../../images/editt.png')} style={{width:18, height:18,backgroundColor:'#fff'}} />

                                   </TouchableOpacity>
                                           <Text style={{fontSize:8, padding:5, color:'rgb(255,165,0)',}}>Edit Privacy</Text>
                                                      </View>
                     </View>
                     <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                     <View style={{flexDirection:'column',alignItems:'center'}}>
                     <Text style={{fontSize:10,  paddingLeft:25,paddingRight:20}}>20</Text>
                     <Text style={{fontSize:10, }}>POSTS</Text>
                     </View>

                     <View style={{flexDirection:'column', alignItems:'center'}}>
                     <Text style={{fontSize:10, paddingLeft:20,paddingRight:20}}>200</Text>
                     <Text style={{fontSize:10,paddingLeft:20,paddingRight:20 }}>FOLLOWERS</Text>
                     </View>

                     <View style={{flexDirection:'column',alignItems:'center'}}>
                     <Text style={{fontSize:10, paddingLeft:20,paddingRight:20}}>20K</Text>
                     <Text style={{fontSize:10,  }}>FOLLOWING</Text>
                     </View>

                     </View>


                     </View>

                     <View style={styles.down}>
                     <View style={styles.downHeader}>


                        <ProfileTab/>

                     </View>

                     </View>
                     <View style={styles.circle}>
                     <Image source={require('../../images/darego.jpeg')} style={{width:wp('22%'), height:hp('11.5%'),borderRadius:50,borderColor:'#f4f4f4', border:'solid', borderWidth:1}}  />
                     </View>

        </View>


      );
    }
  }




  const styles = StyleSheet.create({
    MainContainer: {
      width:wp('100%'),
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      flexDirection:'column',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0.5 },
      shadowOpacity: 2,
      shadowRadius: 2,
      elevation: hp('0.9%'),

    },
    up:{
     backgroundColor: '#e6ffff',
      // backgroundColor: '#f2f2f2',
      position:'absolute',
      width:wp('100%'),
      height:hp('14%'),
      top:hp('0%'),
      alignItems:'center',
      flexDirection:'column',
    },
    middle:{
      backgroundColor: '#fff',
      position:'absolute',
      width:wp('100%'),
      height:hp('14%'),
      top:hp('12%'),
      alignItems:'center',
      flexDirection:'column',
      borderBottomColor:'#fff',
      borderBottomWidth:1,
      borderTopColor:'#f2f2f2',
     // borderTopColor:'#a3c2c2',
      borderTopWidth:1,
    },

    down:{
      backgroundColor: '#e6ffff',
      position:'absolute',
      width:wp('100%'),
      //height:hp('67%'),
      top:hp('25%'),
      alignItems:'center',
      flexDirection:'column',
    },
    downHeader:{
     width:wp('99%'),
     //height:hp('50%'),
      flex:1,
     backgroundColor:'rgb(255,165,0)',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',


    },
        circle:{
          backgroundColor: 'gray',
          position:'absolute',
          top:hp('5%'),
          alignItems:'center',
          flexDirection:'column',
          borderRadius:100,
          borderColor:'#e6ffff',
          borderWidth:1,
          borderStyle:'solid',
          left:wp('10%'),
        },

    image:{
     width:wp('19%'),
     height:hp('11%'),
     alignItems:'center',
     backgroundColor:'#f2f2f2',
     justifyContent:'center',
     borderRadius:100,
     top:hp('1%'),
     position:'absolute',

    },
    Name:{
     position:'absolute',
     top:hp('12%'),
    },
    Scroll:{
     position:'absolute',
     top:hp('22%'),
     width:wp('100%'),
     height:hp('16%'),
     justifyContent:'center',

    },
    top:{
      width:wp('100%'),
      height:hp('18%'),
      },

    bottom: {
   flex: 1,
   width:wp('96%'),


  },
  welcomeMessage:{
  marginLeft:20,
  },
  welcomeMessageText:{
  fontSize:17,
  fontWeight:'bold',
  padding:3,
  },

  listAvatar:{
   width:wp('13%'),
   height:hp('7%'),
   padding:10,
  backgroundColor:'#fff',
  borderRadius:50,
  margin:10,
  marginLeft:20,
  borderRadius:50,
  borderStyle:'solid',
  borderWidth:0.9,
  borderColor:'#f2f2f2',
  },

  cards:{
     width:wp('40%'),
     height:hp('15%'),
     borderWidth: 1,
    borderRadius: 6,
    borderStyle:'solid',
    borderColor:'#f4f4f4',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flexDirection:'column',
   shadowOffset: {width: 0, height: 3},
   shadowOpacity: 0.10,
   shadowRadius: 3.65,
    elevation: 0.9,
    backgroundColor:'#fff',
    alignItems:'center',
  },
  earningCards:{
   width:wp('30%'),
   height:hp('12%'),
     borderWidth: 1,
    borderRadius: 6,
    borderStyle:'solid',
    borderColor:'#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flexDirection:'column',
    backgroundColor:'#fff',
    color:'#00b300',
    alignItems:'center',
    shadowColor: '#00b300',
       shadowOffset: { width: 0, height:hp('1.5%') },
       shadowOpacity: 2,
       shadowRadius: 1,
        elevation: hp('0.8%'),
  },
  deliveryCards:{
   width:wp('30%'),
   height:hp('12%'),
     borderWidth: 1,
    borderRadius: 6,
    borderStyle:'solid',
    borderColor:'#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
     shadowColor: '#DA0CE1',
    shadowOffset: { width: 0, height:hp('1.5%') },
    shadowOpacity: 2,
    shadowRadius: 1,
     elevation: hp('0.8%'),
    backgroundColor:'#fff',
    alignItems:'center',
  },
  flightCards:{
   width:wp('30%'),
   height:hp('12%'),
     borderWidth: 1,
    borderRadius: 6,
    borderStyle:'solid',
    borderColor:'#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flexDirection:'column',
    shadowColor: '#fff',
   shadowOffset: { width: 0, height:hp('1.5%') },
   shadowOpacity: 2,
   shadowRadius: 1,
    elevation: hp('0.8%'),
    backgroundColor:'#fff',
    alignItems:'center',
  },
  orderCards:{
   width:wp('30%'),
   height:hp('12%'),
     borderWidth: 1,
    borderRadius: 6,
    borderStyle:'solid',
    borderColor:'#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flexDirection:'column',
    shadowColor: '#fff',
   shadowOffset: { width: 0, height:hp('1.5%') },
   shadowOpacity: 2,
   shadowRadius: 1,
    elevation: hp('0.8%'),
    backgroundColor:'#fff',
    alignItems:'center',
  },


  list:{
   height:hp('41%'),
   width: wp('99%'),
   resizeMode:'contain',
   backgroundColor:'#f2f2f2',
   top:hp('40%'),
   position:'absolute'
  },
listContent:{
 height:hp('10%'),
 width: wp('97%'),
 resizeMode:'contain',
 backgroundColor:'#ffffff',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'space-between',
 margin:5,
 shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 2,
    shadowRadius: 2,
     elevation: hp('0.5%'),
},

  dot:{
   width:wp('4%'),
   height:hp('1.9%'),
   backgroundColor:'black',
    borderRadius:30,
     justifyContent:'center',
     margin:10,
  },
  square:{
   width:wp('4%'),
   height:hp('1.9%'),
   backgroundColor:'#00b300',
   justifyContent:'center',
   margin:10,
  },
  text1:{
   color:'green',

  },
  text2:{
   color:'white',
  },
  online:{
   width:wp('4.2%'),
   height:hp('2.3%'),
   backgroundColor:'#00b300',
   borderRadius:100,
   flexDirection:'column',
  }
  });
