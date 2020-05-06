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
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
type Props ={};


class Select extends React.Component <Props> {
  static navigationOptions = {

  };
 //  componentDidMount (){
 //   setTimeout(()=>{
 //  this.props.navigation.navigate('Login')
 // }, 3000)
 //  }
  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <View style={{width:wp('100%'), height:hp('20%'),position:'absolute', alignItems:'center',top:hp('30%')}}>
       <Text style={styles.caption}>Account Type</Text>
     </View>
       <View style={styles.Top}>
            <View style={styles.one}>
              <Image source={require('../images/cart.png')} style={{height:90, width:90,alignItems:'center',justifyContent:'center',margin:20,}} />
           </View>

          <View style={styles.two}>
          <Image source={require('../images/pay.png')} style={{height:90, width:90,alignItems:'center',justifyContent:'center',margin:20,}} />
          </View>
      </View>
      <View style={styles.Down}>
           <View style={styles.titleOne}>
             <Text style={styles.captionBottom}>Buyer</Text>
          </View>

         <View style={styles.titleTwo}>
          <Text style={styles.captionBottom}>Seller</Text>
         </View>
     </View>
    </View>

    );
  }
}
export default Select;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :wp('100%'),
height:hp('100%'),
 alignItems:'center',
 justifyContent:'center',
 },

imageSize:{
 marginTop:100,
 width:width,
 height:200,
},

caption:{
 color:'	rgb(255,165,0)',
 fontWeight:'bold',
 margin:10,
 fontSize:30,
},

captionBottom:{
 color:'	rgb(255,165,0)',
 fontWeight:'bold',
 margin:10,
 fontSize:25,
},
Top:{
 position:'absolute',
 flexDirection:'row',
 justifyContent:'space-between',
 alignItems:'center',
margin:10,

},
one:{
 width:wp('35%'),
 height:hp('20%'),
 backgroundColor:'green',
 margin:10,
 alignItems:'center',
 borderRadius:8,

},
two:{
 width:wp('35%'),
 height:hp('20%'),
  backgroundColor:'green',
   margin:10,
    borderRadius:8,
},
Down:{
 position:'absolute',
 flexDirection:'row',
 justifyContent:'space-between',
 alignItems:'center',
margin:15,
top:hp('55%')
},

titleOne:{
 width:wp('35%'),
 height:hp('8%'),
 margin:10,
 alignItems:'center',
},
titleTwo:{
 width:wp('35%'),
 height:hp('8%'),
 margin:10,
 alignItems:'center',
},

})
