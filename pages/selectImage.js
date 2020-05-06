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
  BackHandler
} from 'react-native';
// import { RNCamera } from 'react-native-camera';
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


class SelectImage extends React.Component <Props> {
 constructor(props) {

   super(props)
   this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
   this.state = {


   }
 }



                    componentWillMount() {
                    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
                    }

                    componentWillUnmount() {
                    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
                    }

                    handleBackButtonClick() {
                    this.props.navigation.navigate('Seller');
                    return true;
                    }

  saveData = ()=>{
         const {email,password} = this.state;

          this.camera = {ref}


}
  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <View style={{width:wp('100%'), height:hp('20%'),position:'absolute', alignItems:'center',top:hp('25%')}}>
       <Text style={styles.caption}>Add Profile Picture</Text>
     </View>
       <View style={styles.Top}>
       <TouchableOpacity
               onPress={() => this.props.navigation.navigate('ChooseImage')}>
            <View style={styles.one}>
              <Image source={require('../assets/gallery.png')} style={{height:45, width:45,alignItems:'center',justifyContent:'center',}} />
           </View>
       </TouchableOpacity>

       <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PhotoCamera')}>
          <View style={styles.two}>
          <Image source={require('../assets/photoo.png')} style={{height:45, width:45,alignItems:'center',justifyContent:'center',}} />
          </View>
       </TouchableOpacity>
      </View>
             <View style={styles.Down}>
             <TouchableOpacity
             style={{width:wp('100%'), alignItems:'center', flexDirection:'row',justifyContent:'center'}}
                  onPress={() => this.props.navigation.navigate('PaymentDetails')}>
                   <Text style={styles.captionBottom}>Skip</Text>
                  <Image source={require('../assets/arr.png')} style={{height:15, width:15,alignItems:'center', margin:2,}} />
               </TouchableOpacity>
            </View>


    </View>

    );
  }
}
export default SelectImage;

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
 color:'#EBB81D',
 margin:10,
 fontSize:27,
},

captionBottom:{
 color:'#EBB81D',
 fontSize:18,
 alignItems:'center',
 margin:2
},
Top:{
 position:'absolute',
 flexDirection:'row',
 justifyContent:'space-between',
 alignItems:'center',
margin:10,

},
one:{
 width:120,
 height:120,
 backgroundColor:'#EBB81D',
 margin:10,
 alignItems:'center',
 borderRadius:100,
 justifyContent:'center'

},
two:{
 width:120,
 height:120,
 backgroundColor:'gray',
 margin:10,
 alignItems:'center',
 borderRadius:100,
  justifyContent:'center'
},
Down:{
 width:wp('100%'),
 position:'absolute',
 flexDirection:'row',
 alignItems:'center',
top:hp('65%')
},

titleOne:{
 width:wp('30%'),
 height:hp('8%'),
 alignItems:'center',
},
titleTwo:{

 height:hp('8%'),

 alignItems:'center',
},

})
