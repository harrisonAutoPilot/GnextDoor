import React, { Component } from 'react';
import SendSMS from 'react-native-sms';
import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler,Button } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import StarRating from '../StarRating/user-star/star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
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

class General extends Component{
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
  const ratingObj = {
    ratings: 4.3,
    views: 3700
  }
  const ratingObj1 = {
    ratings: 3.5,
    views: 2600
  }
  const ratingObj2 = {
    ratings: 3.8,
    views: 2900
  }

  return(
   <View style={styles. MainContainerGeneral}>

        <View style={styles.list}>
           <ScrollView vertical={true}
           style={styles.scrollContainerDown}
            ref={(scrollView) => {scrollView = scrollView; }}
           showsVerticalScrollIndicator={false}>


                <View style={styles.cardsList}>
                <View style={styles.review}>
                           <View style={styles.name}>
                               <View style={styles.user_name}><Text style={{fontWeight:'bold',  fontSize:12}}>Segun Yussuf,</Text></View>
                               <View style={styles.user_location}><Image style={styles.userImageContainer} source={require('../../images/loc.png')} style={{width:13, height:13,backgroundColor:'#fff'}} /></View>
                               <View style={styles.user_address}><Text style={{fontSize:11}}>Akere Street Abeokuta Ogun State</Text></View>
                           </View>

                            <View style={styles.star_rating}>
                               <StarRating ratingObj={ratingObj}/>
                            </View>

                            <View style={styles.title}>
                                <View style={styles.review_title}><Text style={{ fontWeight:'bold',}}>I didnt belive it! until ...</Text></View>
                            </View>
                            <View style={styles.content}>
                                   <View style={styles.review_content}><Text style={{fontSize:11}}>I got to know about DaregoBespoke from a junior colleague in the office whose fashion sense i admire alot.I decided to give it a try and to my surprise, they surpass my expectation</Text></View>
                             </View>

                             <View style={styles.date}>
                             <View style={styles.review.date_icon}><Image style={styles.userImageContainer} source={require('../../images/calendar.png')} style={{width:13, height:13,backgroundColor:'#fff'}} /></View>
                                 <View style={styles.review_date}><Text style={{ fontWeight:'bold',fontSize:9}}>24-11-2019</Text></View>
                             </View>
                </View>
                </View>

                <View style={styles.cardsList}>
                <View style={styles.review}>
                           <View style={styles.name}>
                               <View style={styles.user_name}><Text style={{fontWeight:'bold',  fontSize:12}}>Matha Reeves,</Text></View>
                               <View style={styles.user_location}><Image style={styles.userImageContainer} source={require('../../images/loc.png')} style={{width:13, height:13,backgroundColor:'#fff'}} /></View>
                               <View style={styles.user_address}><Text style={{fontSize:13}}>Idumota Lagos</Text></View>
                           </View>

                            <View style={styles.star_rating}>
                               <StarRating ratingObj={ratingObj}/>
                            </View>

                            <View style={styles.title}>
                                <View style={styles.review_title}><Text style={{ fontWeight:'bold',}}>Absolutely the best service!</Text></View>
                            </View>
                            <View style={styles.content}>
                                   <View style={styles.review_content}><Text style={{fontSize:11}}>My experience with this product is so overwhemming, I was referred and i was not disappointed, infact i am glad and very delighted about the product. my only advise is that they should make the price of their service a little bit negotiable</Text></View>
                             </View>

                             <View style={styles.date}>
                             <View style={styles.review.date_icon}><Image style={styles.userImageContainer} source={require('../../images/calendar.png')} style={{width:13, height:13,backgroundColor:'#fff'}} /></View>
                                 <View style={styles.review_date}><Text style={{ fontWeight:'bold',fontSize:9}}>27-04-2019</Text></View>
                             </View>
                </View>
                </View>
                <View style={styles.cardsList}>
                <View style={styles.review}>
                           <View style={styles.name}>
                               <View style={styles.user_name}><Text style={{fontWeight:'bold',  fontSize:12}}>Stella Uyanna,</Text></View>
                               <View style={styles.user_location}><Image style={styles.userImageContainer} source={require('../../images/loc.png')} style={{width:13, height:13,backgroundColor:'#fff'}} /></View>
                               <View style={styles.user_address}><Text style={{fontSize:13}}>Wuse Zone 4 Fct Abuja </Text></View>
                           </View>

                            <View style={styles.star_rating}>
                               <StarRating ratingObj={ratingObj1}/>
                            </View>

                            <View style={styles.title}>
                                <View style={styles.review_title}><Text style={{ fontWeight:'bold',}}>Am Impressed!</Text></View>
                            </View>
                            <View style={styles.content}>
                                   <View style={styles.review_content}><Text style={{fontSize:11}}>My experience with this product is so overwhemming, I was referred and i was not disappointed, infact i am glad and very delighted about the product. my only advise is that they should make the price of their service a little bit negotiable</Text></View>
                             </View>

                             <View style={styles.date}>
                             <View style={styles.review.date_icon}><Image style={styles.userImageContainer} source={require('../../images/calendar.png')} style={{width:13, height:13,backgroundColor:'#fff'}} /></View>
                                 <View style={styles.review_date}><Text style={{ fontWeight:'bold',fontSize:9}}>26-09-2018</Text></View>
                             </View>
                </View>
                </View>
                <View style={styles.cardsList}>
                <View style={styles.review}>
                           <View style={styles.name}>
                               <View style={styles.user_name}><Text style={{fontWeight:'bold',  fontSize:12}}>Maimuna Umar,</Text></View>
                               <View style={styles.user_location}><Image style={styles.userImageContainer} source={require('../../images/loc.png')} style={{width:13, height:13,backgroundColor:'#fff'}} /></View>
                               <View style={styles.user_address}><Text style={{fontSize:13}}>Police Junction, Phase 2 Kaduna Road</Text></View>
                           </View>

                            <View style={styles.star_rating}>
                               <StarRating ratingObj={ratingObj2}/>
                            </View>

                            <View style={styles.title}>
                                <View style={styles.review_title}><Text style={{ fontWeight:'bold',}}>Nice Experience!</Text></View>
                            </View>
                            <View style={styles.content}>
                                   <View style={styles.review_content}><Text style={{fontSize:11}}>My experience with this product is so overwhemming, I was referred and i was not disappointed, infact i am glad and very delighted about the product. my only advise is that they should make the price of their service a little bit negotiable</Text></View>
                             </View>

                             <View style={styles.date}>
                             <View style={styles.review.date_icon}><Image style={styles.userImageContainer} source={require('../../images/calendar.png')} style={{width:13, height:13,backgroundColor:'#fff'}} /></View>
                                 <View style={styles.review_date}><Text style={{ fontWeight:'bold',fontSize:9}}>13-06-2018</Text></View>
                             </View>
                </View>
                </View>









           </ScrollView>

           </View>
    </View>
 );
}
}
export default General;



const styles = StyleSheet.create({

MainContainerGeneral: {
 height:hp('100%'),
 flex: 1,
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
height:hp('70%'),
top:hp('0%'),
},
cardsList:{
width: wp('99%'),
resizeMode: 'contain',
borderWidth: 0,
borderRadius: 1.5,
shadowColor: '#000',
shadowOffset: { width: 0, height:hp('0.5%') },
shadowOpacity: 2,
shadowRadius: 2,
elevation: hp('0.5%'),
marginTop: 3,
flexDirection:'row',
backgroundColor:'#fff',
},
review:{
 width:wp('95%'),
 // borderColor:'gray',
 // borderStyle:'dashed',
 // borderWidth:1,
 // margin:1,
},
name:{
 height:hp('4%'),
 width:wp('93%'),
 // borderColor:'gray',
 // borderStyle:'solid',
 // borderWidth:1,
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 margin:2,
},
user_name:{
width:wp('45%'),
paddingLeft:wp('17.5%'),
},
user_location:{
width:wp('5%'),
alignItems:'flex-start',
},
user_address:{
width:wp('45%'),
alignItems:'flex-start',
},
star_rating:{
 width:wp('80%'),
paddingLeft:wp('16.5%'),
},
title:{
 width:wp('90%'),
paddingLeft:wp('16.5%'),
},
content:{
 width:wp('80%'),
paddingLeft:wp('16.5%'),
height:'auto',
},
date:{
 flexDirection:'row',
 width:wp('90%'),
 height:hp('5%'),
 paddingLeft:wp('16%'),
 margin:5,
},
review_date_icon:{
 width:wp('30%'),
},
review_date:{
  width:wp('50%'),
   marginLeft:wp('5%'),

}

});
