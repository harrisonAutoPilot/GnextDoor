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
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Hr from 'react-native-hr-component'
const width = Dimensions.get('window').width;


class LoginB extends React.Component {

 state = {
      email: '',
      password: ''
   }
  static navigationOptions = {

  };




  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <View>

     <Text style={styles.caption}>Welcome back</Text>
     </View>
     <View>
      <Image source={require('../images/GG.png')} style={styles.imageLogin} />
    </View>

     <View style={styles.content}>
          <View style={styles.username}>

           <TextInput
                   style={styles.input1}
                   placeholder='Username'
                   autoCapitalize="none"
                   placeholderTextColor='gray'
                   onChangeText={val => this.onChangeText('username', val)}
                 />

                 <TextInput
                 style={styles.input1}
                 placeholder='Username'
                 autoCapitalize="none"
                 placeholderTextColor='gray'
                 onChangeText={val => this.onChangeText('username', val)}

                 />
         </View>

         <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => this.login(this.state.email, this.state.password)
             }>
             <Text style = {styles.submitButtonText}> SIGN IN </Text>
          </TouchableOpacity>
    </View>
   <View>
   <View style={styles.regWith}>
<View><Text style={styles.line}> __________ </Text></View>
<View><Text style={styles.Te}>Or Register With</Text></View>
<View><Text style={styles.line}> __________ </Text></View>
   </View>

   <View style={styles.regSelect}>
   <TouchableOpacity
       style = {styles.googleButton}
       onPress = {
          () => this.login(this.state.email, this.state.password)
       }>
       <View style={styles.button1}>
       <View><Image source={require('../images/goog.png')} style={styles.imagegoogB}/></View>
       <View><Text style = {styles.submitButtonText}>Google</Text></View>
       </View>
    </TouchableOpacity>
    <TouchableOpacity
        style = {styles.faceBookButton}
        onPress = {
           () => this.login(this.state.email, this.state.password)
        }>
        <View style={styles.button1}>
        <View><Image source={require('../images/face.png')} style={styles.imagefaceB}/></View>
        <View><Text style = {styles.submitButtonText}>facebook</Text></View>
        </View>

     </TouchableOpacity>

   </View>
<View style={styles.captionBB}>
 <Text style={styles.captionB}>Connect to Find Businesses Next Door</Text>
 </View>

   </View>

     </View>

    );
  }
}
export default LoginB;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
 alignItems:'center',
 justifyContent:'center',
 },
content:{

},
 input: {
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 20,
    borderColor:'gray',
    borderStyle:'solid',
     borderWidth: 1,
    fontSize: 18,
    fontWeight: '500',

  },
  input1: {
     width: 300,
     height: 35,
     margin: 20,
     padding: 8,
     color: 'white',
     borderStyle:'solid',
     borderBottomColor:'rgb(255,165,0)',
     fontSize: 14,

     borderBottomWidth:1,
   },
caption:{
 color:'	rgb(255,165,0)',
 margin:10,
 fontSize:25,
},
captionBB:{
justifyContent:'center',
alignItems:'center',
margin:5,
},
captionB:{
 color:'	rgb(255,165,0)',
 fontSize:11,

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
submitButton: {
      backgroundColor:'rgb(255,165,0)',
      padding: 10,
      margin: 15,
      height: 50,
      alignItems:'center',
      justifyContent:'center',
   },
   submitButtonText:{
   color: 'white'
   },
   profileImage:{
    width:100,
    height:100,
    backgroundColor:'#00b300',
    borderRadius:10,
   },
   imageLogin:{
    width:100,
    height:100,
    alignItems:'center',
   },
   regWith:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   },
   Te:{
    color:'gray',
   },
   line:{
    color:'	rgb(255,165,0)',
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
googleButton:{
 width:130,
 height:50,
 borderWidth:1,
 borderColor:'rgb(255, 70, 6)',
 borderStyle:'solid',
 margin:4,
justifyContent:'center',
backgroundColor:'rgb(255, 70, 6)',
borderRadius:2,
},
faceBookButton:{
 width:130,
 height:50,
 borderWidth:1,
 borderColor:'rgb(30, 149, 255)',
 borderStyle:'solid',
 margin:4,
 justifyContent:'center',
 backgroundColor:'rgb(30, 149, 255)',
 borderRadius:2,

},
button1:{
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
},
imagefaceB:{
 width:30,
 height:30,
 alignItems:'flex-end',
 marginLeft:-10,
 marginRight:10,
},

imagegoogB:{
 width:30,
 height:30,
 alignItems:'flex-end',
 marginLeft:-10,
 marginRight:13,
}
})
