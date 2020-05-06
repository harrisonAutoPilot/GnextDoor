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



class Buyer extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     this.state = {
          email: '',
          password: '',
           name: '',
           phone: '',
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
                this.props.navigation.navigate('LoginB');
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
      <Text style={styles.buyerTitle}>Buyer Account</Text>

    </View>
   </View>


 <View style={styles.content}>
           <View style={styles.username}>

            <TextInput
                    style={styles.input1}
                    placeholder='Mobile Number'
                    autoCapitalize="none"
                    placeholderTextColor='gray'
                    onChangeText={(emailVal) =>{
                     this.setState({
                      email:emailVal,
                     });
                    }}
                    value={this.state.email}
                  />
                  <TextInput
                          style={styles.input1}
                          placeholder='Full Name'
                          autoCapitalize="none"
                          placeholderTextColor='gray'
                          onChangeText={(emailVal) =>{
                           this.setState({
                            email:emailVal,
                           });
                          }}
                          value={this.state.email}
                        />
                       <TextInput
                                style={styles.input1}
                                placeholder='Email address'
                                autoCapitalize="none"
                                placeholderTextColor='gray'
                                onChangeText={(emailVal) =>{
                                 this.setState({
                                  email:emailVal,
                                 });
                                }}
                                value={this.state.email}
                              />
                  <TextInput
                  style={styles.input1}
                  placeholder='Password'
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholderTextColor='gray'
                  onChangeText={(passwordVal) =>{
                   this.setState({
                    password:passwordVal,
                   });
                  }}

                  value={this.state.password}
                  />
                  <Select
                      data={items}
                      style={styles.select}
                      placeholder="Select an Interest ..."
                      onSelect={this.onSelectedItemsChange.bind(this)}
                      search={true}
                      width={320}

                    />


                    <View style={styles.btnContainer}>
                    <ScrollView horizontal={true}
                     ref={(scrollView) => { scrollView = scrollView; }}
                    showsHorizontalScrollIndicator={false}>
                    {
                     interest && interest.length > 0 && interest.map(val => {
                      return (
                    <TouchableOpacity
                    key={val.id}
                    style={styles.interestButton}
                         >
                    <Text style={styles.btnText}>{val.title}</Text>
                    </TouchableOpacity>
                   )
                   })
                   }
                   </ScrollView>
                    </View>
                  <View style={styles.option}>
                            <Text style={{color:'rgb(255,165,0)', fontSize:17,}}>Do you have any service(s) or product(s) to sell ?</Text>
                        <View style={{flexDirection:'row', marginTop:2}}>
                              <TouchableOpacity
                              style={styles.optionButtonY}
                                   >
                              <Text style={styles.btnText}>Yes</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                              style={styles.optionButtonY}
                                   >
                              <Text style={styles.btnText}>No</Text>
                              </TouchableOpacity>
                        </View>
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
                        <Text style={styles.optionText}>  I agree to the Policy, Terms and Condition</Text>
                     </View>

           </View>



            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly' }}>
          <TouchableOpacity
              style = {styles.signButton}
               // onPress={this.saveData}>
                // onPress={() => this.props.navigation.navigate('Home_ActivityB')}>
                >
              <Text style = {styles.submitButtonText}> SUBMIT</Text>
           </TouchableOpacity>
           </View>


                 </View>
               </View>



    );
  }
}
export default Buyer;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
 },
 caption:{
  color:'	rgb(255,165,0)',
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
  top:hp('5%'),
 },
  input: {
     width: 350,
     height: 55,
     margin: 10,
     padding: 8,
     color: 'black',
     borderRadius: 20,
     borderColor:'gray',
     borderStyle:'solid',
      borderWidth: 1,
     fontSize: 18,
     fontWeight: '500',
 justifyContent:'center',
 marginLeft:wp('12%'),
 marginRight:wp('12%'),
   },
   input1: {
      width: 320,
      height: 35,
      marginTop:20,
      padding: 8,
      color: 'black',
      borderStyle:'solid',
      borderBottomColor:'gray',
      fontSize: 14,
      borderBottomWidth:0.8,
       justifyContent:'center',
       marginLeft:wp('15%'),
       marginRight:wp('15%'),
    },
select:{
 width: 320,
 height: 35,
 marginTop:20,
 padding: 8,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'gray',
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
 backgroundColor:'rgb(255,165,0)',
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
 username:{
  margin:10,

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
 backgroundColor:'rgb(255,165,0)',
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
 fontSize:25,
 color:'rgb(255,165,0)',
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
margin:2
},
optionText:{
 width:280,
 height:25,
 fontSize:12,
 alignItems:'center',
 marginTop:5,
 color:'rgb(255,165,0)',
//textDecorationLine: 'underline',

}

})
