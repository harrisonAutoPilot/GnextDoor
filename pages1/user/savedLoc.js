import React, { Component } from 'react';
import SendSMS from 'react-native-sms';
import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler,Button } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
import { NavigationActions } from 'react-navigation';
import {data} from '../../util/profile/aboutData';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class SavedLocation extends
 Component{
 constructor(props) {
   super(props);
   //this.back_Button_Press = this.back_Button_Press.bind(this);
   this.state = {

   }

 }

 smsSendFunction() {

   SendSMS.send({
       body: 'Please follow us on https://reactnativecode.com',
       recipients: ['08062585929'],
       successTypes: ['sent', 'queued']
   }, (completed, cancelled, error) => {
       if(completed){
         Alert.alert('SMS Sent Successfully.')
       }else if(cancelled){
         console.log('SMS Sent Cancelled.');
       }else if(error){
         console.log('Some error occured.');
       }
   });
 }
 render(){
  return(
   <View style={styles. MainContainer}>

        <View style={styles.list}>
           <ScrollView vertical={true}
           style={styles.scrollContainerDown}
            ref={(scrollView) => { _scrollView = scrollView; }}
           showsVerticalScrollIndicator={false}>
          {
           data && data.length > 0 && data.map(val => {
            return (
             <TouchableOpacity
                key={val.id}
                onPress={() => this.props.navigation.navigate('User')}>

                <View style={styles.cardsList}>

                             <View style={styles.listAvatar}>
                             <Image source={val.listAvatar} style={{width:wp('19%'),height:hp('10%'),borderRadius:50,}}  />
                             </View>
                     <View style={styles.listContent}>
                        <View style={styles.cardTop}>
                        <View style={styles.savedTitle}><Text style={{fontSize:15,fontWeight:'bold'}}>{val.savedTitle}</Text></View>
                        <View style={styles.savedDate}><Text style={{fontSize:10,}}>{val.date}</Text></View>
                        </View>
                        <View style={styles.cardDown}>
                        <View style={styles.savedAddress}>
                           <View style={styles.addressLogoContainer}>

                           <Image style={styles.userImageContainer} source={require('../../images/loc.png')} style={{width:13, height:13,backgroundColor:'#fff'}} /></View>
                           <View style={styles.savedAddressContent}>

                           <Text style={{fontSize:13, flexWrap: 'wrap'}}>{val.savedAddress}</Text></View>
                        </View>
                     <View style={styles.savedMessage}>
                        <Text style={{fontSize:10, flexWrap: 'wrap',color:'gray'}}>{val.savedMessage}</Text>
                     </View>
                        </View>


                     </View>

                 </View>
             </TouchableOpacity>
            )
           })
          }


           </ScrollView>

           </View>

    </View>
 );
}
}
export default SavedLocation;



const styles = StyleSheet.create({

MainContainer: {
 flex: 1,
 height:hp('100%'),
 justifyContent: 'center',
 alignItems: 'center',
backgroundColor: '#f2f2f2',
 flexDirection:'column',
 resizeMode: 'contain',
},

list:{
position:'absolute',
flexDirection:'column',
width:wp('98%'),
height:hp('77%'),
top:hp('0%'),
},
listSponsore:{
position:'absolute',
flexDirection:'column',
width:wp('95%'),
height:hp('30%'),
top:hp('33.5%'),
},
cardsList:{
width: wp('98%'),
height:hp('13%'),
resizeMode: 'contain',
borderWidth: 0,
borderRadius: 1.5,
shadowColor: '#000',
shadowOffset: { width: 0, height:hp('0.5%') },
shadowOpacity: 2,
shadowRadius: 2,
elevation: hp('0.5%'),
marginTop: 2,
flexDirection:'row',
backgroundColor:'#fff',
},
listAvatar:{
width:wp('19%'),
height:hp('10%'),
backgroundColor:'#f2f2f2',
borderRadius:50,
margin:10,
resizeMode: 'cover',
},
listContent:{
flexDirection:'column',
},

cardTop:{
 width:wp('65%'),
 height:hp('5%'),
 marginLeft:wp('4%'),
flexDirection:'row',
paddingTop:5,
paddingLeft:5,
},
savedTitle:{

},
savedDate:{
 paddingTop:3,
 marginLeft:wp('10%'),
},
cardDown:{
 width:wp('65%'),
 height:hp('6%'),
 marginLeft:wp('2.5%'),


},
savedAddress:{
 flexDirection:'row',
},
addressLogoContainer:{
 margin:1,

},
savedAddressContent:{
flexWrap: 'wrap',
flexDirection:'row',
},
savedMessage:{
 marginLeft:wp('1%'),
},
backgroundImage:{
width:hp('100%'),
height: hp('90%'),
alignSelf: 'center',
resizeMode: 'contain',
position:'relative',
zIndex:0,
},

scrollContainer:{
flex: 1,
flexDirection: 'row',
marginLeft:20,
},

});
