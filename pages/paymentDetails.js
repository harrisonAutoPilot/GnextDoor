import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  Image,
   BackHandler,
  TouchableOpacity,
} from 'react-native';
import ProgressBar from '@kcodev/react-native-progress-bar';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import CheckBox from 'react-native-check-box';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {interest} from '../util/buyer/interestButtonData';
import Hr from 'react-native-hr-component';
import Select from 'react-native-select-plus';
const width = Dimensions.get('window').width;



class PaymentDetails extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     this.state = {
          cardHolderName: '',
          cardNumber: '',
           cardCvvNumber: '',
           cardExpireNumber: '',
           visible: false,
           value: null,
        items: [
      { key: 1, section: true, label: "Interest" },
      { key: 2, label: "Sport" },
      { key: 3, label: "Music" },
      { key: 4, label: "Tech" },
      { key: 5, label: "Magic" },
      { key: 6, label: "Fashion" },
      { key: 7, label: "Building" },
      { key: 8, label: "Art" },
      { key: 9, label: "Academics" },

    ],
  };

  this.onSelectedItemsChange = (key, value) => {
    this.setState({ value: value });
  };


}




                componentWillMount() {
                BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                componentWillUnmount() {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                handleBackButtonClick() {
                this.props.navigation.navigate('SelectImage');
                return true;
                }


         saveData = ()=>{
                const {email,password} = this.state;

                //save data with asyncstorage
                let loginDetails={
                    email: email,
                    password: password
                }

                if(email=='harrison' && password == 'admin')
                {

                    alert("Successful Login!. Welcome Harrison " )
                   this.props.navigation.navigate('Home')}

                else if (email !='harrison' && password != 'admin'){
                  alert("Wrong Username or Password. Please Contact Your Admin On  08062585929")
                  this.props.navigation.navigate('')}
       }


         render() {
    const {navigate} = this.props.navigation;
    const { value, items } = this.state;
    return (
     <View style={styles.container}>


     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('2%') }}>
     <View >
      <Text style={styles.buyerTitle}>Add Payment Details</Text>
    </View>
   </View>


                                  <View style={styles.content}>
                                          <View style={styles.username}>
                                          <View style={styles.paymentLogos}>
                                           <Image source={require('../assets/visa.jpeg')} style={styles.payLogoVisa} />
                                           <Image source={require('../assets/amazon.png')} style={styles.payLogoAmazon} />
                                            <Image source={require('../assets/paypal.jpg')} style={styles.payLogo} />
                                     </View>

                         <View style={styles.formContainer}>
                         <View style={styles.inputContainer}>
                                    <View style={{flexDirection:'row',alignItems:'flex-start', width:wp('80%'),}}>
                                             <Text style={{color:'#EBB81D', fontSize:12,fontWeight:'bold',marginLeft:10}}>CARD NUMBER</Text>
                                     </View>
                                     <TextInput
                                             style={styles.input1}
                                             placeholder='1234  5678  3456  2456'
                                             autoCapitalize="none"
                                             placeholderTextColor='#EBB81D'
                                             onChangeText={(cardNumberVal) =>{
                                              this.setState({
                                               cardNumber:cardNumberVal,
                                              });
                                             }}
                                             value={this.state.cardNumber}
                                           />
                                           </View>
                                             <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
                                           <View style={styles.inputContainerN}>
                                                   <View style={{flexDirection:'row',alignItems:'flex-start', width:wp('60%'),}}>
                                                         <Text style={{color:'#EBB81D', fontSize:12,fontWeight:'bold',marginLeft:35}}>EXPIRE DATE</Text>
                                                   </View>
                                                      <TextInput
                                                              style={styles.inputCardExpire}
                                                              placeholder='05 / 21'
                                                              autoCapitalize="none"
                                                              placeholderTextColor='#EBB81D'
                                                              onChangeText={(cardExpireNumberVal) =>{
                                                               this.setState({
                                                                cardExpireNumber:cardExpireNumberVal,
                                                               });
                                                              }}
                                                              value={this.state.cardExpireNumber}
                                                            />
                                               </View>

                                               <View style={styles.inputContainerN}>
                                                       <View style={{flexDirection:'row',alignItems:'flex-start', width:wp('30%'),}}>
                                                             <Text style={{color:'#EBB81D', fontSize:12,fontWeight:'bold',marginLeft:0}}>CVV</Text>
                                                       </View>
                                                          <TextInput
                                                                  style={styles.inputCardCvv}
                                                                  placeholder='023'
                                                                  autoCapitalize="none"
                                                                  placeholderTextColor='#EBB81D'
                                                                  onChangeText={(cardCvvNumberVal) =>{
                                                                   this.setState({
                                                                    cardCvvNumber:cardCvvNumberVal,
                                                                   });
                                                                  }}
                                                                  value={this.state.cardCvvNumber}
                                                                />
                                                   </View>

                                               </View>
                                            <View style={styles.inputContainerN}>
                                                    <View style={{flexDirection:'row',alignItems:'flex-start', width:wp('80%'),}}>
                                                          <Text style={{color:'#EBB81D', fontSize:12,fontWeight:'bold',marginLeft:10}}>CARD HOLDER NAME</Text>
                                                    </View>
                                                       <TextInput
                                                               style={styles.input1}
                                                               placeholder='Abraham Isaac'
                                                               autoCapitalize="none"
                                                               placeholderTextColor='#EBB81D'
                                                               onChangeText={(cardHolderNameVal) =>{
                                                                this.setState({
                                                                 cardHolderName:cardHolderNameVal,
                                                                });
                                                               }}
                                                               value={this.state.cardHolderName}
                                                             />
                                                </View>
                                                <View style={styles.termsContainer}>
                                                <CheckBox
                                                     style={styles.optionRadio}
                                                     onClick={()=>{
                                                       this.setState({
                                                           isChecked:!this.state.isChecked
                                                       })
                                                     }}
                                                     isChecked={this.state.isChecked}
                                                      // rightText={"I"}
                                                 />
                                                   <Text style={styles.optionText}> SAVE CARD</Text>
                                                </View>
                                                <View >
                                                 <Text style={styles.buyerTitle}>Merchant Payout Account</Text>
                                               </View>
                                               <TextInput
                                                       style={styles.input1}
                                                       placeholder='Account Name'
                                                       autoCapitalize="none"
                                                       placeholderTextColor='gray'
                                                       onChangeText={(cardNumberVal) =>{
                                                        this.setState({
                                                         cardNumber:cardNumberVal,
                                                        });
                                                       }}
                                                       value={this.state.cardNumber}
                                                     />
                                                     <TextInput
                                                             style={styles.input1}
                                                             placeholder='Account Number'
                                                             autoCapitalize="none"
                                                             placeholderTextColor='gray'
                                                             onChangeText={(cardNumberVal) =>{
                                                              this.setState({
                                                               cardNumber:cardNumberVal,
                                                              });
                                                             }}
                                                             value={this.state.cardNumber}
                                                           />
                                                           <TextInput
                                                                   style={styles.input1}
                                                                   placeholder='BVN'
                                                                   autoCapitalize="none"
                                                                   placeholderTextColor='gray'
                                                                   onChangeText={(cardNumberVal) =>{
                                                                    this.setState({
                                                                     cardNumber:cardNumberVal,
                                                                    });
                                                                   }}
                                                                   value={this.state.cardNumber}
                                                                 />
                                           <Select
                                               data={items}
                                               style={styles.select}
                                               placeholder="Select Bank"
                                               onSelect={this.onSelectedItemsChange.bind(this)}
                                               search={true}
                                               width={320}


                                             />
                                              <TouchableOpacity  onPress={() => this.props.navigation.navigate('Authenticate')} style={styles.btnSection}  >
                                             <View style={{flexDirection:'row', justifyContent:'flex-end',width:350, marginTop:10}}>
                                              <Text style={styles.nextText}>Save & Continue</Text>
                                              <Image source={require('../assets/arr.png')} style={{height:13, width:13,alignItems:'center', marginTop:8,marginLeft:10}} />
                                             </View>
                                              </TouchableOpacity>
                                             <View style={{ flexDirection: "row", width:330,height:5, position:'absolute', top:490 }}>
                                                     <View style={{ width:330, }}>
                                                      <Text>75% Complete</Text>
                                                       <ProgressBar
                                                         value={75}
                                                         maxValue={100}
                                                         backgroundColorOnComplete="#123123"
                                                         backgroundColor="#009900"
                                                       />

                                                     </View>
                                                   </View>
                                    </View>
                         </View>


            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly' }}>

           </View>


                 </View>
               </View>



    );
  }
}
export default PaymentDetails;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
 },
 paymentLogos:{
  width:wp('100%'),
  height:70,
  flexDirection:'row',
  paddingLeft:10,
  paddingRight:10,
  marginTop:13,
  opacity:0.5
 },
 payLogo:{
  width:140,
  height:40,
opacity:0.5
 },
 payLogoAmazon:{
  width:140,
  height:60,
  opacity:0.5

 },
 payLogoVisa:{
  width:100,
  height:50,
  resizeMode:'contain',
  opacity:0.5
 },
 username:{
position:'absolute',
alignItems:'center',
top:13,
 },
 formContainer:{
  position:'absolute',
  alignItems:'center',
  top:40,
  marginTop:20,
 },
 caption:{
  color:'#EBB81D',
  margin:10,
  fontSize:25,
 },
 imageSize:{
 width: 150,
 height:150,
 alignSelf: 'center',
 resizeMode: 'contain',
 borderRadius:200,
  },
  content:{
  position:'absolute',
  justifyContent:'center',
  top:hp('3%'),
  alignItems:'center',
 },

 //  input: {
 //     width: 350,
 //     height: 55,
 //     margin: 10,
 //     padding: 8,
 //     color: 'black',
 //     borderRadius: 20,
 //     borderColor:'gray',
 //     borderStyle:'solid',
 //      borderWidth: 1,
 //     fontSize: 18,
 //     fontWeight: '500',
 // justifyContent:'center',
 // marginLeft:wp('12%'),
 // marginRight:wp('12%'),
   // },
   input1: {
      width: 320,
      height: 35,
      marginTop:7,
      padding: 1,
      color: '#EBB81D',
      borderStyle:'solid',
      borderBottomColor:'#EBB81D',
      fontSize: 15,
      borderBottomWidth:0.8,
       justifyContent:'center',
    },
    inputCardExpire: {
       width: 180,
       height: 35,
       marginTop:5,
       padding: 1,
       color: '#EBB81D',
       borderStyle:'solid',
       borderBottomColor:'#EBB81D',
       fontSize: 20,
       borderBottomWidth:0.8,
        justifyContent:'center',
     },
     inputCardCvv: {
        width: 100,
        height: 35,
        marginTop:5,
        padding: 1,
        color: '#EBB81D',
        borderStyle:'solid',
        borderBottomColor:'#EBB81D',
        fontSize: 20,
        borderBottomWidth:0.8,
         justifyContent:'center',
         alignItems:'center',
         marginRight:35,
      },
select:{
 width: 320,
 height: 35,
 marginTop:10,
 padding: 8,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'#EBB81D',
 fontSize: 14,
 borderBottomWidth:0.8,
  justifyContent:'center',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
  borderTopWidth:0,
  borderRightWidth:0,
  borderLeftWidth:0,
},
signButton: {
// backgroundColor:'#1b7dec',
 backgroundColor:'#EBB81D',
width:wp('70%'),
height:hp('8%'),
alignItems:'center',
justifyContent:'center',
borderRadius:5,

       },

 welcomeMessage:{
  color:'#00b300',
  margin:10,
  fontSize:20,
 },
 captionBB:{
 justifyContent:'center',
 alignItems:'center',
 margin:5,
 },
 captionB:{
  color:'black',
  fontSize:15,

 },

 userTest:{
  marginLeft:30,
  fontSize: 15,
  fontWeight: '500',
  color:'black',
  height:15,
 },
    profileImage:{
     width:100,
     height:100,
     backgroundColor:'#00b300',
     borderRadius:10,
    },
    imageLogin:{
     width:200,
     height:200,
     alignItems:'center',
    },
submitButton: {
 backgroundColor:'#EBB81D',
 padding: 10,
 margin: 15,
 height: 50,
 alignItems:'center',
 justifyContent:'center',
   },


   submitButtonText:{
   color: 'white',
   fontSize:15,
   },
   profileImage:{
    width:100,
    height:100,
    backgroundColor:'#00b300',
    borderRadius:10,
   },
   imageLogin:{
    width:200,
    height:200,
    alignItems:'center',
   },
   regWith:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   },
   Te:{
    color:'gray',
    fontSize:10,
   },
   line:{
    color:'#663300',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:13,
    fontSize:15,
   },
   regSelect:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    margin:10,

   },

button1:{
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
},
buyerTitle:{
 fontSize:20,
 color:'#EBB81D',
},
nextText:{
 fontSize:17,
 color:'#EBB81D',
 alignItems:'center',
 margin:2,
},
btnContainer:{
 width: 320,
 height: 50,
 padding: 8,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'gray',
 fontSize: 14,
  justifyContent:'center',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
flexDirection:'row'
},
interestButton:{
 width:60,
 height:25,
 backgroundColor:'gray',
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2

},
btnText:{
color:'#fff',
fontSize:10,
textAlign:'center'
},
option:{
 width: 320,
 height: 90,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'gray',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
 flexDirection:'column'

},
optionButtonY:{
 width:60,
 height:25,
 backgroundColor:'gray',
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2
},
optionButtonN:{
 width:60,
 height:25,
 backgroundColor:'#009900',
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2
},
termsContainer:{
 width: 320,
 height: 40,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'gray',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
 flexDirection:'row'
},
optionRadio:{
 width:30,
 height:25,
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2,
color:'#EBB81D',
},
optionText:{
 width:280,
 height:25,
 fontSize:12,
 alignItems:'center',
 marginTop:5,
 color:'#EBB81D',
//textDecorationLine: 'underline',
},
inputContainer:{
alignItems:'center',
height:80,
paddingTop:10,


},
inputContainerN:{
alignItems:'center',
height:70,
paddingTop:5,


}})
